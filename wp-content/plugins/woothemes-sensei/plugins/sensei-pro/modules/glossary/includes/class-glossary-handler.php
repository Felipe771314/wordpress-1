<?php
/**
 * File containing the class \Sensei_Pro_Glossary\Glossary_Handler.
 *
 * @package sensei-pro-glossary
 * @since   1.11.0
 */

namespace Sensei_Pro_Glossary;

/**
 * Handler for creating the glossary links.
 *
 * @internal
 */
class Glossary_Handler {
	/**
	 * Keeps track of the processed content that was run through the "the_content" filter.
	 * Stores a hash key (post id + md5) for each content processed.
	 *
	 * @var array
	 */
	private $processed_content = [];

	/**
	 * Keeps track of the processed phrases for a specific post.
	 * Stores a hash key (post id + phrase slug) for each phrase processed.
	 *
	 * @var array
	 */
	private $processed_phrases = [];

	/**
	 * The replaced phrases count.
	 *
	 * @var int
	 */
	private $phrases_replaced = 0;

	/**
	 * The glossary repository instance.
	 *
	 * @var Glossary_Repository
	 */
	private $repository;

	/**
	 * The markup generator.
	 *
	 * @var Glossary_Markup_Generator
	 */
	private $markup_generator;

	/**
	 * Class constructor.
	 *
	 * @internal
	 *
	 * @param Glossary_Repository       $repository
	 * @param Glossary_Markup_Generator $markup_generator
	 */
	public function __construct( Glossary_Repository $repository, Glossary_Markup_Generator $markup_generator ) {
		$this->repository       = $repository;
		$this->markup_generator = $markup_generator;
	}

	/**
	 * Initialize the class and add hooks.
	 *
	 * @internal
	 */
	public function init(): void {
		add_filter( 'the_content', [ $this, 'add_glossary_markup' ], 12 ); // Run after do_shortcode.
	}

	/**
	 * Parses the content and adds the glossary entries markup.
	 *
	 * @internal
	 *
	 * @param string $content The content.
	 *
	 * @return string
	 */
	public function add_glossary_markup( $content ) {
		if ( ! $content || ! $this->should_process_content() ) {
			return $content;
		}

		$content_key = get_the_ID() . '-' . md5( $content );

		// Sometimes the_content runs multiple times.
		// Keep track of already processed content to avoid
		// running the somewhat heavy processing more than once.
		if ( ! empty( $this->processed_content[ $content_key ] ) ) {
			return $content;
		}

		$this->processed_content[ $content_key ] = true;

		$regex = $this->get_phrases_regex();
		if ( ! $regex ) {
			return $content;
		}

		$elements     = wp_html_split( $content );
		$ignored_tags = [ 'code', 'a', 'pre', 'style', 'abbr' ];
		$inside_block = [];
		foreach ( $elements as &$element ) {
			if ( '' === trim( $element ) ) {
				continue;
			}

			if ( 0 === strpos( $element, '<' ) ) {
				$offset     = 1;
				$is_end_tag = false;

				if ( 1 === strpos( $element, '/' ) ) {
					$offset     = 2;
					$is_end_tag = true;
				}

				preg_match( '/^.+\b/U', substr( $element, $offset ), $matches );

				if ( in_array( $matches[0], $ignored_tags, true ) ) {
					if ( ! $is_end_tag ) {
						array_unshift( $inside_block, $matches[0] );
					} elseif ( $matches[0] === $inside_block[0] ) {
						array_shift( $inside_block );
					}

					continue;
				}
			}

			// Skip any links that will be auto-generated by make_clickable()
			// three strpos() are faster than one preg_match() here.
			if ( strpos( $element, 'http://' ) !== false || strpos(
				$element,
				'https://'
			) !== false || strpos( $element, 'www.' ) !== false ) {
				continue;
			}

			if ( empty( $inside_block ) ) {
				$element = preg_replace_callback( $regex, [ $this, 'replace_phrase_with_markup' ], $element );
			}
		}

		return implode( $elements );
	}

	/**
	 * Check if there are replaced phrases.
	 *
	 * @internal
	 *
	 * @return bool
	 */
	public function has_replaced_phrases(): bool {
		return $this->phrases_replaced > 0;
	}

	/**
	 * Replace the glossary phrase with a link if appropriate.
	 *
	 * @param array $matches Glossary phrase regex matches.
	 *
	 * @return string
	 */
	private function replace_phrase_with_markup( array $matches ): string {
		$full_match   = $matches[0];
		$phrase_match = $matches[1]; // Currently, this is the same as the $full_match, but it might not be in the future.

		$phrase_key = get_the_ID() . '-' . sanitize_title( $phrase_match );
		if ( ! empty( $this->processed_phrases[ $phrase_key ] ) ) {
			// This has already been processed once in the post text.
			// We only add the definition to the first occurrence.
			return $full_match;
		}

		$this->processed_phrases[ $phrase_key ] = true;

		$entry = $this->repository->get_entry_by_phrase( $phrase_match );
		if ( ! $entry ) {
			return $full_match;
		}

		$found_text_length = strlen( $phrase_match );
		// The first char is allowed to be uppercase (start a sentence for example).
		$found_text_is_lower_case = ctype_lower( substr( $phrase_match, 1 ) );

		// If the word found in the regex is 6 or fewer chars it could be an acronym,
		// but if it is lowercase there is a good chance it's not meant as that in
		// context. Here we check if the word fetched from the glossary data is all
		// uppercase and if that is the case we also require the found word to be
		// uppercase. For example "lgtm" in the post text would not get underlined,
		// but "LGTM" would.
		if ( $found_text_length <= 6 && $found_text_is_lower_case && ctype_upper( $entry->get_phrase() ) ) {
			return $full_match;
		}

		$this->phrases_replaced++;

		// Prevent recursively calling `the_content` filter when generating the markup.
		remove_filter( 'the_content', [ $this, 'add_glossary_markup' ], 12 );
		$markup = $this->markup_generator->get_phrase_markup( $phrase_key, $phrase_match, $entry );
		add_filter( 'the_content', [ $this, 'add_glossary_markup' ], 12 );

		return $markup;
	}

	/**
	 * Check if we should create the glossary links or not.
	 *
	 * @return bool
	 */
	private function should_process_content(): bool {
		if (
			is_feed()
			|| is_embed()
			|| is_admin()
			|| doing_filter( 'get_the_excerpt' )
			|| ! is_singular( 'lesson' )
			|| ! sensei_can_user_view_lesson()
		) {
			return false;
		}

		return true;
	}

	/**
	 * Return all glossary phrases in a regular expression form.
	 *
	 * @return string|null
	 */
	private function get_phrases_regex(): ?string {
		$entries = $this->repository->get_entries();

		if ( ! $entries ) {
			return null;
		}

		$phrases = array_map(
			static function ( $entry ) {
				return $entry->get_phrase();
			},
			$entries
		);

		$phrases_string = str_replace(
			'/',
			'\/',
			implode(
				'|',
				array_map( 'preg_quote', $phrases )
			)
		);

		// Not that this uses the \b (word boundary) modifier. This means that
		// some words like +t+d will not be picked up. Can likely be improved.
		return "/\b($phrases_string)(?!([^<]+)?>)\b/i";
	}
}
