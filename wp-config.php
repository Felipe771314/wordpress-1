<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nuevaBd' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
define( 'FS_METHOD','direct');
// ** FTP settings ** //

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'WAy!f#g_8su0,P:XzhqnAb$(TqC0pF19s HxOZj{wI3aC-R|nYv!z@zj]S$iV%5E' );
define( 'SECURE_AUTH_KEY',  '9DY-& ORY6#MyYv~q0y.cLe*8;6>h%G90sh};$G>6LLWwqEhpIR/iaVacpYD?jIz' );
define( 'LOGGED_IN_KEY',    'FaUhkE={Q;Pzl?MJG$1l&x;$,x1uuJx9ee,2CPVpJLtM~0Nf$y{h(}S(P)tgC!Y;' );
define( 'NONCE_KEY',        '>)k_sf1RJem<z~I`QjGUMYusv&;vE=?&}XuPYfFt-Dm^/yq_Hv`%!/PP0|pmYsLr' );
define( 'AUTH_SALT',        '7jLQ(F xeaBn,ApcYs]>q5QjGW<c33{aOj%`G-i$)g]6<n|k}GBdiwEJ9_^4n<n*' );
define( 'SECURE_AUTH_SALT', '}4Jz4=v3p7-FS})Bo8is8:!n!iQ(:a70(wzK42{_t/gftv-Wug|8$8`BJv]K_wd+' );
define( 'LOGGED_IN_SALT',   '~l{mm_@<} ;]]OT+bvtx9.]F%he(I+{Rz/Mw2S.ZYKWEptY}bdGF aQ;Sx3+;r{u' );
define( 'NONCE_SALT',       '`~p*l1+F:P9K)CE{!tZS)J]jRZab|rEyp]Ja=&zuyn~W-Dw71#gZm+r+!].6>#7,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
