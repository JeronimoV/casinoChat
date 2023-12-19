/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/fpixel.js":
/*!***************************!*\
  !*** ./src/lib/fpixel.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FB_PIXEL_ID: () => (/* binding */ FB_PIXEL_ID),\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst FB_PIXEL_ID = 324970230458164;\nconst pageview = ()=>{\n    window.fbq(\"track\", \"PageView\");\n};\n// https://developers.facebook.com/docs/facebook-pixel/advanced/\nconst event = (name, options = {})=>{\n    window.fbq(\"track\", name, options);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZwaXhlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxjQUFjLGdCQUFnQjtBQUVwQyxNQUFNQyxXQUFXO0lBQ3RCQyxPQUFPQyxHQUFHLENBQUMsU0FBUztBQUN0QixFQUFFO0FBRUYsZ0VBQWdFO0FBQ3pELE1BQU1DLFFBQVEsQ0FBQ0MsTUFBTUMsVUFBVSxDQUFDLENBQUM7SUFDdENKLE9BQU9DLEdBQUcsQ0FBQyxTQUFTRSxNQUFNQztBQUM1QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkYmxhY2stY2hhdC8uL3NyYy9saWIvZnBpeGVsLmpzPzQxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZCX1BJWEVMX0lEID0gMzI0OTcwMjMwNDU4MTY0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5mYnEoXCJ0cmFja1wiLCBcIlBhZ2VWaWV3XCIpO1xyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLXBpeGVsL2FkdmFuY2VkL1xyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgd2luZG93LmZicShcInRyYWNrXCIsIG5hbWUsIG9wdGlvbnMpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiRkJfUElYRUxfSUQiLCJwYWdldmlldyIsIndpbmRvdyIsImZicSIsImV2ZW50IiwibmFtZSIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/fpixel.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fpixel */ \"./src/lib/fpixel.js\");\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // This pageview only triggers the first time (it's important for Pixel to have real information)\n        _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.pageview();\n        const handleRouteChange = ()=>{\n            _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.pageview();\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"fb-pixel\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', ${_lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.FB_PIXEL_ID});\n          `\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jeronimo\\\\Desktop\\\\redblack-chat\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jeronimo\\\\Desktop\\\\redblack-chat\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRUk7QUFDRDtBQUNPO0FBQ0g7QUFFckMsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ1IsaUdBQWlHO1FBQ2pHRyxpREFBWTtRQUVaLE1BQU1NLG9CQUFvQjtZQUN4Qk4saURBQVk7UUFDZDtRQUVBSSxPQUFPRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJGO1FBQ3hDLE9BQU87WUFDTEYsT0FBT0csTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCSDtRQUMzQztJQUNGLEdBQUc7UUFBQ0YsT0FBT0csTUFBTTtLQUFDO0lBRWxCLHFCQUNFOzswQkFFRSw4REFBQ1Qsb0RBQU1BO2dCQUNMWSxJQUFHO2dCQUNIQyxVQUFTO2dCQUNUQyx5QkFBeUI7b0JBQ3ZCQyxRQUFRLENBQUM7Ozs7Ozs7Ozt3QkFTSyxFQUFFYixvREFBZSxDQUFDO1VBQ2hDLENBQUM7Z0JBQ0g7Ozs7OzswQkFFRiw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGJsYWNrLWNoYXQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZmJxIGZyb20gXCIuLi9saWIvZnBpeGVsXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRoaXMgcGFnZXZpZXcgb25seSB0cmlnZ2VycyB0aGUgZmlyc3QgdGltZSAoaXQncyBpbXBvcnRhbnQgZm9yIFBpeGVsIHRvIGhhdmUgcmVhbCBpbmZvcm1hdGlvbilcbiAgICBmYnEucGFnZXZpZXcoKTtcblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgZmJxLnBhZ2V2aWV3KCk7XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbcm91dGVyLmV2ZW50c10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBHbG9iYWwgU2l0ZSBDb2RlIFBpeGVsIC0gRmFjZWJvb2sgUGl4ZWwgKi99XG4gICAgICA8U2NyaXB0XG4gICAgICAgIGlkPVwiZmItcGl4ZWxcIlxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpXG4gICAgICAgICAgICB7aWYoZi5mYnEpcmV0dXJuO249Zi5mYnE9ZnVuY3Rpb24oKXtuLmNhbGxNZXRob2Q/XG4gICAgICAgICAgICBuLmNhbGxNZXRob2QuYXBwbHkobixhcmd1bWVudHMpOm4ucXVldWUucHVzaChhcmd1bWVudHMpfTtcbiAgICAgICAgICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnO1xuICAgICAgICAgICAgbi5xdWV1ZT1bXTt0PWIuY3JlYXRlRWxlbWVudChlKTt0LmFzeW5jPSEwO1xuICAgICAgICAgICAgdC5zcmM9djtzPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSlbMF07XG4gICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsXG4gICAgICAgICAgICAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpO1xuICAgICAgICAgICAgZmJxKCdpbml0JywgJHtmYnEuRkJfUElYRUxfSUR9KTtcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2NyaXB0IiwidXNlUm91dGVyIiwiZmJxIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJwYWdldmlldyIsImhhbmRsZVJvdXRlQ2hhbmdlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJpZCIsInN0cmF0ZWd5IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJGQl9QSVhFTF9JRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();