/******/(()=>{// webpackBootstrap
/******/var e={
/***/82857:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307),s=n(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const o=(0,r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(s.Path,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}));
/* harmony default export */}
//# sourceMappingURL=more-vertical.js.map
/***/,
/***/99854:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>o
/* harmony export */});
/* harmony import */var r=n(69307),s=n(70444);
/* harmony import */
/**
 * WordPress dependencies
 */
const o=(0,r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(s.Path,{d:"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"}));
/* harmony default export */}
//# sourceMappingURL=search.js.map
/***/,
/***/60042:
/***/(e,t)=>{var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}
/***/,
/***/40483:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(69307);
/* harmony import */
/**
 * WordPress dependencies
 */
// Solution borrowed from https://gist.github.com/kentcdodds/b36572b6e9227207e6c71fd80e63f3b4.
function s(){var e=(0,r.useRef)(),t=(0,r.useCallback)((function(){return e.current||(e.current=new AbortController),e.current}),[]);return(0,r.useEffect)((function(){return function(){return t().abort()}}),[t]),{getSignal:(0,r.useCallback)((function(){return t().signal}),[t])}}
/***/},
/***/45031:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>f
/* harmony export */});
/* unused harmony export CourseList */
/* harmony import */var r=n(90228),s=n(66886),o=n(69307),i=n(55609),a=n(22629),u=n(65736),l=n(37798),c=n(86938),__=u.__,d=function(){return(0,o.createElement)("li",{className:"sensei-student-modal__course-list--loading"},(0,o.createElement)(i.Spinner,null))},m=function(){return(0,o.createElement)("li",{className:"sensei-student-modal__course-list--empty"},__("No courses found.","sensei-lms"))},p=function(e){var t,n=e.course,r=e.checked,u=void 0!==r&&r,l=e.onChange,c=null==n?void 0:n.id,d=(0,a.decodeEntities)(null==n||null===(t=n.title)||void 0===t?void 0:t.rendered),m=(0,o.useState)(u),p=(0,s/* ["default"] */.Z)(m,2),f=p[0],v=p[1],h=(0,o.useCallback)((function(e){v(e),l({isSelected:e,course:n})}),[n,l]);return(0,o.createElement)("li",{className:"sensei-student-modal__course-list__item",key:c},(0,o.createElement)(i.CheckboxControl,{id:"course-".concat(c),title:d,checked:f,onChange:h}),(0,o.createElement)("label",{htmlFor:"course-".concat(c),title:d},d))};
/* harmony import */
/* harmony default export */const f=function(e){var t=e.searchQuery,n=e.onChange,s=(0,o.useRef)([]),i=(0,o.useCallback)((function(e){var t=e.isSelected,o=e.course;s.current=t?[].concat((0,r/* ["default"] */.Z)(s.current),[o]):s.current.filter((function(e){return e.id!==o.id})),n(s.current)}),[n]),a=(0,c/* ["default"] */.Z)((function(e){var n=e(l.store),r={per_page:100,search:t,filter:"teacher"};return{courses:n.getEntityRecords("postType","course",r)||[],isFetching:!n.hasFinishedResolution("getEntityRecords",["postType","course",r])}}),[t],500),u=a.courses,f=a.isFetching;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("span",{className:"sensei-student-modal__course-list__header"},__("Your Courses","sensei-lms")),(0,o.createElement)("ul",{className:"sensei-student-modal__course-list"},f&&(0,o.createElement)(d,null),!f&&0===u.length&&(0,o.createElement)(m,null),!f&&0<u.length&&u.map((function(e){return(0,o.createElement)(p,{key:e.id,course:e,onChange:i,checked:s.current.length>0&&s.current.find((function(t){return t.id===e.id}))})}))))};
/***/},
/***/9240:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>v
/* harmony export */});
/* unused harmony export StudentModal */
/* harmony import */var r=n(27791),s=n(66886),o=n(69307),i=n(55609),a=n(99854),u=n(65736),l=n(81975),c=n(86989),d=n.n(c),m=n(45031),p=n(91442),f=n(40483),__=u.__,_n=u._n;
/* harmony import */
/* harmony default export */const v=function(e){var t=e.action,n=e.onClose,c=e.students,v=e.studentDisplayName,h=function(e,t,n){var r=(0,l.escapeHTML)(n);return{add:{description:t>1?(0,u.sprintf)(// Translators: placeholder is the number of selected students.
__("Select the course(s) you would like to add <strong>%d students</strong> to:","sensei-lms"),t):(0,u.sprintf)(// Translators: placeholder is the student's name.
__("Select the course(s) you would like to add <strong>%s</strong> to:","sensei-lms"),r),buttonLabel:__("Add to Course","sensei-lms"),errorMessage:function(e){return _n("Unable to add student. Please try again.","Unable to add students. Please try again.",e.length,"sensei-lms")},sendAction:function(e,t,n){var r=n.signal;return d()({path:"/sensei-internal/v1/course-students/batch",method:"POST",data:{student_ids:e,course_ids:t},signal:r})},isDestructive:!1},remove:{description:t>1?(0,u.sprintf)(// Translators: placeholder is the number of selected students.
__("Select the course(s) you would like to remove <strong>%d students</strong> from:","sensei-lms"),t):(0,u.sprintf)(// Translators: placeholder is the student's name.
__("Select the course(s) you would like to remove <strong>%s</strong> from:","sensei-lms"),r),buttonLabel:__("Remove from Course","sensei-lms"),errorMessage:function(e){return _n("Unable to remove student. Please try again.","Unable to remove students. Please try again.",e.length,"sensei-lms")},sendAction:function(e,t,n){var r=n.signal;return d()({path:"/sensei-internal/v1/course-students/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:r})},isDestructive:!0},"reset-progress":{
// Translators: placeholder is the number of selected students for plural, student's name for singular.
description:t>1?(0,u.sprintf)(// Translators: placeholder is the number of selected students.
__("Select the course(s) you would like to reset progress from for <strong>%d students</strong>:","sensei-lms"),t):(0,u.sprintf)(// Translators: placeholder is the student's name.
__("Select the course(s) you would like to reset progress from for <strong>%s</strong>:","sensei-lms"),r),buttonLabel:__("Reset Progress","sensei-lms"),errorMessage:function(e){return _n("Unable to reset progress for this student. Please try again.","Unable to reset progress for these students. Please try again.",e.length,"sensei-lms")},sendAction:function(e,t,n){var r=n.signal;return d()({path:"/sensei-internal/v1/course-progress/batch",method:"DELETE",data:{student_ids:e,course_ids:t},signal:r})},isDestructive:!0}}[e]}(t,c.length,v),g=h.description,y=h.buttonLabel,w=h.errorMessage,b=h.isDestructive,Z=h.sendAction,E=(0,o.useState)([]),_=(0,s/* ["default"] */.Z)(E,2),S=_[0],C=_[1],x=(0,o.useState)(""),k=(0,s/* ["default"] */.Z)(x,2),N=k[0],A=k[1],O=(0,o.useState)(!1),P=(0,s/* ["default"] */.Z)(O,2),R=P[0],j=P[1],D=(0,o.useState)(!1),M=(0,s/* ["default"] */.Z)(D,2),I=M[0],F=M[1],T=(0,f/* ["default"] */.Z)().getSignal,L=(0,o.useCallback)((0,r/* ["default"] */.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,Z(c,S.map((function(e){return e.id})),{signal:T()});case 4:n(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),T().aborted||(F(!0),j(!1));case 10:case"end":return e.stop()}}),e,null,[[1,7]])}))),[Z,c,S,n,T]);return(0,o.createElement)(i.Modal,{className:"sensei-student-modal",title:__("Choose Course","sensei-lms"),onRequestClose:function(){return n()}},(0,o.createElement)(o.RawHTML,null,g),(0,o.createElement)(p/* ["default"] */.Z,{iconRight:a/* ["default"] */.Z,onChange:function(e){return A(e)},placeholder:__("Search courses","sensei-lms"),value:N}),(0,o.createElement)(m/* ["default"] */.Z,{searchQuery:N,onChange:function(e){C(e)}}),I&&(0,o.createElement)(i.Notice,{status:"error",isDismissible:!1,className:"sensei-student-modal__notice"},w(c)),(0,o.createElement)("div",{className:"sensei-student-modal__action"},(0,o.createElement)(i.Button,{className:"sensei-student-modal__action",variant:b?"":"primary",onClick:function(){return L()},disabled:R||0===S.length,isDestructive:b},R&&(0,o.createElement)(i.Spinner,null),y)))};
/***/},
/***/91442:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>c
/* harmony export */});
/* harmony import */var r=n(25773),s=n(53782),o=n(69307),i=n(60042),a=n.n(i),u=n(55609),l=["className","id","label","value","help","iconRight","onChange"];
/* harmony import */
/* harmony default export */const c=function(e){var t=e.className,n=e.id,i=e.label,c=e.value,d=e.help,m=e.iconRight,p=e.onChange,f=(0,s/* ["default"] */.Z)(e,l);return(0,o.createElement)(u.BaseControl,{id:n,label:i,help:d},(0,o.createElement)("div",{className:"sensei-input-control"},(0,o.createElement)("input",(0,r/* ["default"] */.Z)({className:a()("sensei-input-control__input",{"sensei-input-control__input--with-icon-right":m},t),type:"text",id:n,value:null===c?"":c,onChange:function(e){return p(e.target.value)}},f)),m&&(0,o.createElement)("span",{className:"sensei-input-control__icon"},(0,o.createElement)(u.Icon,{icon:m}))))};
/***/},
/***/86938:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>a
/* harmony export */});
/* harmony import */var r=n(66886),s=n(92819),o=n(9818),i=n(69307);
/* harmony import */
/* harmony default export */const a=function(e,t,n){var a=(0,i.useState)(t),u=(0,r/* ["default"] */.Z)(a,2),l=u[0],c=u[1],d=(0,i.useCallback)((0,s.debounce)(c,n),[c,n]);// eslint-disable-next-line react-hooks/exhaustive-deps -- Using debounce as callback.
return(0,i.useEffect)((function(){d(t);// eslint-disable-next-line react-hooks/exhaustive-deps -- Dependencies coming from args.
}),t),(0,o.useSelect)(e,l)};
/***/},
/***/92819:
/***/e=>{"use strict";e.exports=window.lodash}
/***/,
/***/86989:
/***/e=>{"use strict";e.exports=window.wp.apiFetch}
/***/,
/***/55609:
/***/e=>{"use strict";e.exports=window.wp.components}
/***/,
/***/37798:
/***/e=>{"use strict";e.exports=window.wp.coreData}
/***/,
/***/9818:
/***/e=>{"use strict";e.exports=window.wp.data}
/***/,
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/81975:
/***/e=>{"use strict";e.exports=window.wp.escapeHtml}
/***/,
/***/92694:
/***/e=>{"use strict";e.exports=window.wp.hooks}
/***/,
/***/22629:
/***/e=>{"use strict";e.exports=window.wp.htmlEntities}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/70444:
/***/e=>{"use strict";e.exports=window.wp.primitives}
/***/,
/***/1793:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66470:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){if(Array.isArray(e))return e}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/58138:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(1793);function s(e){if(Array.isArray(e))return(0,r/* ["default"] */.Z)(e)}
/***/},
/***/27791:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t,n,r,s,o,i){try{var a=e[o](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,o){var i=e.apply(t,n);function a(e){r(i,s,o,a,u,"next",e)}function u(e){r(i,s,o,a,u,"throw",e)}a(void 0)}))}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */})},
/***/25773:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/55181:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/22446:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,o=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);_n=!0);}catch(e){i=!0,s=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw s}}return o}}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53764:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/83314:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/53782:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(30808);function s(e,t){if(null==e)return{};var n,s,o=(0,r/* ["default"] */.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}
/***/},
/***/30808:
/***/(e,t,n)=>{"use strict";
/* harmony export */function r(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}
/***/n.d(t,{
/* harmony export */Z:()=>/* binding */r
/* harmony export */})},
/***/66886:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(66470),s=n(22446),o=n(64013),i=n(53764);
/* harmony import */function a(e,t){return(0,r/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e,t)||(0,o/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)()}
/***/},
/***/90228:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var r=n(58138),s=n(55181),o=n(64013),i=n(83314);
/* harmony import */function a(e){return(0,r/* ["default"] */.Z)(e)||(0,s/* ["default"] */.Z)(e)||(0,o/* ["default"] */.Z)(e)||(0,i/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,n)=>{"use strict";
/* harmony export */n.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var r=n(1793);function s(e,t){if(e){if("string"==typeof e)return(0,r/* ["default"] */.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function n(r){
/******/ // Check if module is in cache
/******/var s=t[r];
/******/if(void 0!==s)
/******/return s.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[r]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r](o,o.exports,n),o.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return n.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/n.d=(e,t)=>{
/******/for(var r in t)
/******/n.o(t,r)&&!n.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* unused harmony export StudentActionMenu */
/* harmony import */var e=n(66886),t=n(69307),r=n(55609),s=n(82857),o=n(92694),i=n(65736),a=n(9240),__=i.__,u=function(n){var i=n.studentId,u=n.studentName,l=n.studentDisplayName,c=(0,t.useState)(""),d=(0,e/* ["default"] */.Z)(c,2),m=d[0],p=d[1],f=(0,t.useState)(!1),v=(0,e/* ["default"] */.Z)(f,2),h=v[0],g=v[1],y=function(e){e&&window.location.reload(),g(!1)},w=[{title:__("Add to Course","sensei-lms"),onClick:function(){return Z()}},{title:__("Remove from Course","sensei-lms"),onClick:function(){return E()}},{title:__("Reset Progress","sensei-lms"),onClick:function(){return _()}},{title:__("Grading","sensei-lms"),onClick:function(){return window.open("admin.php?page=sensei_grading&view=ungraded&s=".concat(u),"_self")}}],b=(0,o.applyFilters)("senseiStudentActionMenuControls",w,p,g),Z=function(){p("add"),g(!0)},E=function(){p("remove"),g(!0)},_=function(){p("reset-progress"),g(!0)},S=(0,t.createElement)(a/* ["default"] */.Z,{action:m,onClose:y,students:[i],studentDisplayName:l}),C=(0,o.applyFilters)("senseiStudentBulkActionModal",S,m,y,[i],l);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.DropdownMenu,{icon:s/* ["default"] */.Z,label:__("Select an action","sensei-lms"),controls:b}),h&&C)};
/* harmony import */Array.from(document.getElementsByClassName("student-action-menu")).forEach((function(e){var n,r,s;(0,t.render)((0,t.createElement)(u,{studentId:null==e||null===(n=e.dataset)||void 0===n?void 0:n.userId,studentName:null==e||null===(r=e.dataset)||void 0===r?void 0:r.userName,studentDisplayName:null==e||null===(s=e.dataset)||void 0===s?void 0:s.userDisplayName}),e)}))})()})
/******/();