"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/component/like-button.tsx":
/*!***************************************!*\
  !*** ./src/component/like-button.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LikeButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction LikeButton() {\n    _s();\n    // useState hook to manage the 'likes' state, initialized to 0\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Function to handle button clicks, incrementing the 'likes' state by 1\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    {\n    /* Button that displays the current number of likes and calls handleClick on click */ }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"bg-red-500 hover:bg-red-70 text-white font-bold py-2 px-4 rounded\",\n        children: [\n            \"Like [\",\n            likes,\n            \"]\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/like-button.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(LikeButton, \"m4sdoi624sGASZMfyLgbxubRP0c=\");\n_c = LikeButton;\nvar _c;\n$RefreshReg$(_c, \"LikeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvbGlrZS1idXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpQztBQUVsQixTQUFTQzs7SUFDdEIsOERBQThEO0lBQzlELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUztJQUUzQyx3RUFBd0U7SUFDeEUsU0FBU0k7UUFDUEQsU0FBU0QsUUFBUTtJQUNuQjtJQUVBO0lBQ0UsbUZBQW1GLEdBQ3JGO0lBQ0EscUJBQ0UsOERBQUNHO1FBQ0NDLFNBQVNGO1FBQ1RHLFdBQVU7O1lBQ1g7WUFDUUw7WUFBTTs7Ozs7OztBQUduQjtHQXBCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvbGlrZS1idXR0b24udHN4P2E1NzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpa2VCdXR0b24oKSB7XG4gIC8vIHVzZVN0YXRlIGhvb2sgdG8gbWFuYWdlIHRoZSAnbGlrZXMnIHN0YXRlLCBpbml0aWFsaXplZCB0byAwXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgYnV0dG9uIGNsaWNrcywgaW5jcmVtZW50aW5nIHRoZSAnbGlrZXMnIHN0YXRlIGJ5IDFcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKTtcbiAgfVxuXG4gIHtcbiAgICAvKiBCdXR0b24gdGhhdCBkaXNwbGF5cyB0aGUgY3VycmVudCBudW1iZXIgb2YgbGlrZXMgYW5kIGNhbGxzIGhhbmRsZUNsaWNrIG9uIGNsaWNrICovXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICA+XG4gICAgICBMaWtlIFt7bGlrZXN9XVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGlrZUJ1dHRvbiIsImxpa2VzIiwic2V0TGlrZXMiLCJoYW5kbGVDbGljayIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/like-button.tsx\n"));

/***/ })

});