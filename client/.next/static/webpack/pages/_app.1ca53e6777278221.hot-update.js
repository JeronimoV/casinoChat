/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/fpixel.js":
/*!***************************!*\
  !*** ./src/lib/fpixel.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fpixel */ \"./src/lib/fpixel.js\");\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_fpixel__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // This pageview only triggers the first time (it's important for Pixel to have real information)\n        _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.pageview();\n        const handleRouteChange = ()=>{\n            _lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.pageview();\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"fb-pixel\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n            !function(f,b,e,v,n,t,s)\\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\\n            n.queue=[];t=b.createElement(e);t.async=!0;\\n            t.src=v;s=b.getElementsByTagName(e)[0];\\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\\n            'https://connect.facebook.net/en_US/fbevents.js');\\n            fbq('init', \".concat(_lib_fpixel__WEBPACK_IMPORTED_MODULE_5__.FB_PIXEL_ID, \");\\n          \")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jeronimo\\\\Desktop\\\\redblack-chat\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jeronimo\\\\Desktop\\\\redblack-chat\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFSTtBQUNEO0FBQ087QUFDSDtBQUVyQyxTQUFTSSxNQUFNLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCOztJQUNiLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDUixpR0FBaUc7UUFDakdHLGlEQUFZO1FBRVosTUFBTU0sb0JBQW9CO1lBQ3hCTixpREFBWTtRQUNkO1FBRUFJLE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QkY7UUFDeEMsT0FBTztZQUNMRixPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJIO1FBQzNDO0lBQ0YsR0FBRztRQUFDRixPQUFPRyxNQUFNO0tBQUM7SUFFbEIscUJBQ0U7OzBCQUVFLDhEQUFDVCxvREFBTUE7Z0JBQ0xZLElBQUc7Z0JBQ0hDLFVBQVM7Z0JBQ1RDLHlCQUF5QjtvQkFDdkJDLFFBQVEsc2dCQVN3QixPQUFoQmIsb0RBQWUsRUFBQztnQkFFbEM7Ozs7OzswQkFFRiw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7R0F4Q1NGOztRQUNRRixrREFBU0E7OztLQURqQkU7QUEwQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGZicSBmcm9tIFwiLi4vbGliL2ZwaXhlbFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUaGlzIHBhZ2V2aWV3IG9ubHkgdHJpZ2dlcnMgdGhlIGZpcnN0IHRpbWUgKGl0J3MgaW1wb3J0YW50IGZvciBQaXhlbCB0byBoYXZlIHJlYWwgaW5mb3JtYXRpb24pXG4gICAgZmJxLnBhZ2V2aWV3KCk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGZicS5wYWdldmlldygpO1xuICAgIH07XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogR2xvYmFsIFNpdGUgQ29kZSBQaXhlbCAtIEZhY2Vib29rIFBpeGVsICovfVxuICAgICAgPFNjcmlwdFxuICAgICAgICBpZD1cImZiLXBpeGVsXCJcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICFmdW5jdGlvbihmLGIsZSx2LG4sdCxzKVxuICAgICAgICAgICAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kP1xuICAgICAgICAgICAgbi5jYWxsTWV0aG9kLmFwcGx5KG4sYXJndW1lbnRzKTpuLnF1ZXVlLnB1c2goYXJndW1lbnRzKX07XG4gICAgICAgICAgICBpZighZi5fZmJxKWYuX2ZicT1uO24ucHVzaD1uO24ubG9hZGVkPSEwO24udmVyc2lvbj0nMi4wJztcbiAgICAgICAgICAgIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDtcbiAgICAgICAgICAgIHQuc3JjPXY7cz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpWzBdO1xuICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHMpfSh3aW5kb3csIGRvY3VtZW50LCdzY3JpcHQnLFxuICAgICAgICAgICAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTtcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICR7ZmJxLkZCX1BJWEVMX0lEfSk7XG4gICAgICAgICAgYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNjcmlwdCIsInVzZVJvdXRlciIsImZicSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicGFnZXZpZXciLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImV2ZW50cyIsIm9uIiwib2ZmIiwiaWQiLCJzdHJhdGVneSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiRkJfUElYRUxfSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ }),

/***/ "./node_modules/next/script.js":
/*!*************************************!*\
  !*** ./node_modules/next/script.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/script */ \"./node_modules/next/dist/client/script.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9zY3JpcHQuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3NjcmlwdC5qcz9lNGJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9zY3JpcHQnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/script.js\n"));

/***/ })

});