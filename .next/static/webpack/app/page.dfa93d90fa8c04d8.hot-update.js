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

/***/ "(app-pages-browser)/./src/component/ticket.tsx":
/*!**********************************!*\
  !*** ./src/component/ticket.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TicketBooking = (param)=>{\n    let { adultPrice, childrenPrice } = param;\n    _s();\n    const [adultQuantity, setAdultQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [childrenQuantity, setChildrenQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAdultQuantityChange = (change)=>{\n        setError(null);\n        setAdultQuantity((prev)=>Math.max(prev + change, 0));\n    };\n    const handleChildrenQuantityChange = (change)=>{\n        setError(null);\n        setChildrenQuantity((prev)=>Math.max(prev + change, 0));\n    };\n    const totalCost = adultQuantity * adultPrice + childrenQuantity * childrenPrice;\n    const handleClear = ()=>{\n        setAdultQuantity(0);\n        setChildrenQuantity(0);\n        setError(null);\n    };\n    const handleCheckout = ()=>{\n        if (totalCost === 0) {\n            setError(\"Please select at least one ticket to proceed.\");\n        } else {\n            alert(\"Proceeding to checkout. Total cost: $\".concat(totalCost.toFixed(2)));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Ticket Booking\"\n            }, void 0, false, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mb-4\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-col sm:flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold\",\n                                children: \"Adult Ticket\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"12 years and Above\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white px-4 py-2 rounded-l transition-transform transform hover:scale-105\",\n                                onClick: ()=>handleAdultQuantityChange(-1),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2\",\n                                children: adultQuantity\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 text-white px-4 py-2 rounded-r transition-transform transform hover:scale-105\",\n                                onClick: ()=>handleAdultQuantityChange(1),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 ml-4\",\n                        children: [\n                            \"Price: $\",\n                            adultPrice.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-col sm:flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold\",\n                                children: \"Children Ticket\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"Below 12 years\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white px-4 py-2 rounded-l transition-transform transform hover:scale-105\",\n                                onClick: ()=>handleChildrenQuantityChange(-1),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2\",\n                                children: childrenQuantity\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 text-white px-4 py-2 rounded-r transition-transform transform hover:scale-105\",\n                                onClick: ()=>handleChildrenQuantityChange(1),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 ml-4\",\n                        children: [\n                            \"Price: $\",\n                            childrenPrice.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex flex-col items-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold\",\n                        children: \"Total Cost\"\n                    }, void 0, false, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-800 text-2xl\",\n                        children: [\n                            \"$\",\n                            totalCost.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-gray-400 text-white px-4 py-2 rounded transition-transform transform hover:scale-105\",\n                        onClick: handleClear,\n                        children: \"Clear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105\",\n                        onClick: handleCheckout,\n                        children: \"Checkout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TicketBooking, \"CMahWdkM0Yiy4+Whb9hp7XRYtac=\");\n_c = TicketBooking;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketBooking);\nvar _c;\n$RefreshReg$(_c, \"TicketBooking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGlja2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFPakMsTUFBTUMsZ0JBQWdCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQXNCOztJQUN0RSxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBUztJQUMzRCxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFTO0lBQ2pFLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFFbEQsTUFBTVUsNEJBQTRCLENBQUNDO1FBQ2pDRixTQUFTO1FBQ1RKLGlCQUFpQixDQUFDTyxPQUFTQyxLQUFLQyxHQUFHLENBQUNGLE9BQU9ELFFBQVE7SUFDckQ7SUFFQSxNQUFNSSwrQkFBK0IsQ0FBQ0o7UUFDcENGLFNBQVM7UUFDVEYsb0JBQW9CLENBQUNLLE9BQVNDLEtBQUtDLEdBQUcsQ0FBQ0YsT0FBT0QsUUFBUTtJQUN4RDtJQUVBLE1BQU1LLFlBQ0paLGdCQUFnQkYsYUFBYUksbUJBQW1CSDtJQUVsRCxNQUFNYyxjQUFjO1FBQ2xCWixpQkFBaUI7UUFDakJFLG9CQUFvQjtRQUNwQkUsU0FBUztJQUNYO0lBRUEsTUFBTVMsaUJBQWlCO1FBQ3JCLElBQUlGLGNBQWMsR0FBRztZQUNuQlAsU0FBUztRQUNYLE9BQU87WUFDTFUsTUFBTSx3Q0FBNkQsT0FBckJILFVBQVVJLE9BQU8sQ0FBQztRQUNsRTtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OztZQUV2Q2QsdUJBQVMsOERBQUNnQjtnQkFBRUYsV0FBVTswQkFBcUJkOzs7Ozs7MEJBRzVDLDhEQUFDYTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDQyw4REFBQ0k7Z0NBQUdILFdBQVU7MENBQXdCOzs7Ozs7MENBQ3RDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBZ0I7Ozs7Ozs7Ozs7OztrQ0FFL0IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLFNBQVMsSUFBTWpCLDBCQUEwQixDQUFDOzBDQUMzQzs7Ozs7OzBDQUdELDhEQUFDa0I7Z0NBQUtOLFdBQVU7MENBQWFsQjs7Ozs7OzBDQUM3Qiw4REFBQ3NCO2dDQUNDSixXQUFVO2dDQUNWSyxTQUFTLElBQU1qQiwwQkFBMEI7MENBQzFDOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNjO3dCQUFFRixXQUFVOzs0QkFBcUI7NEJBQVNwQixXQUFXa0IsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7OzBCQUloRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDs7MENBQ0MsOERBQUNJO2dDQUFHSCxXQUFVOzBDQUF3Qjs7Ozs7OzBDQUN0Qyw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7a0NBRS9CLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxTQUFTLElBQU1aLDZCQUE2QixDQUFDOzBDQUM5Qzs7Ozs7OzBDQUdELDhEQUFDYTtnQ0FBS04sV0FBVTswQ0FBYWhCOzs7Ozs7MENBQzdCLDhEQUFDb0I7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLFNBQVMsSUFBTVosNkJBQTZCOzBDQUM3Qzs7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDUzt3QkFBRUYsV0FBVTs7NEJBQXFCOzRCQUFTbkIsY0FBY2lCLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OzswQkFJbkUsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQXdCOzs7Ozs7a0NBQ3RDLDhEQUFDRTt3QkFBRUYsV0FBVTs7NEJBQXlCOzRCQUFFTixVQUFVSSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7MEJBSTVELDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUNDSixXQUFVO3dCQUNWSyxTQUFTVjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDUzt3QkFDQ0osV0FBVTt3QkFDVkssU0FBU1Q7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBN0dNakI7S0FBQUE7QUErR04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC90aWNrZXQudHN4PzE3YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFRpY2tldEJvb2tpbmdQcm9wcyB7XG4gIGFkdWx0UHJpY2U6IG51bWJlcjtcbiAgY2hpbGRyZW5QcmljZTogbnVtYmVyO1xufVxuXG5jb25zdCBUaWNrZXRCb29raW5nID0gKHsgYWR1bHRQcmljZSwgY2hpbGRyZW5QcmljZSB9OiBUaWNrZXRCb29raW5nUHJvcHMpID0+IHtcbiAgY29uc3QgW2FkdWx0UXVhbnRpdHksIHNldEFkdWx0UXVhbnRpdHldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NoaWxkcmVuUXVhbnRpdHksIHNldENoaWxkcmVuUXVhbnRpdHldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVBZHVsdFF1YW50aXR5Q2hhbmdlID0gKGNoYW5nZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgc2V0QWR1bHRRdWFudGl0eSgocHJldikgPT4gTWF0aC5tYXgocHJldiArIGNoYW5nZSwgMCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoaWxkcmVuUXVhbnRpdHlDaGFuZ2UgPSAoY2hhbmdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBzZXRDaGlsZHJlblF1YW50aXR5KChwcmV2KSA9PiBNYXRoLm1heChwcmV2ICsgY2hhbmdlLCAwKSk7XG4gIH07XG5cbiAgY29uc3QgdG90YWxDb3N0ID1cbiAgICBhZHVsdFF1YW50aXR5ICogYWR1bHRQcmljZSArIGNoaWxkcmVuUXVhbnRpdHkgKiBjaGlsZHJlblByaWNlO1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKCkgPT4ge1xuICAgIHNldEFkdWx0UXVhbnRpdHkoMCk7XG4gICAgc2V0Q2hpbGRyZW5RdWFudGl0eSgwKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcbiAgICBpZiAodG90YWxDb3N0ID09PSAwKSB7XG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIHRpY2tldCB0byBwcm9jZWVkLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoYFByb2NlZWRpbmcgdG8gY2hlY2tvdXQuIFRvdGFsIGNvc3Q6ICQke3RvdGFsQ29zdC50b0ZpeGVkKDIpfWApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG1heC13LW1kIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGdcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlRpY2tldCBCb29raW5nPC9oMj5cblxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtYi00XCI+e2Vycm9yfTwvcD59XG5cbiAgICAgIHsvKiBBZHVsdCBUaWNrZXRzIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPkFkdWx0IFRpY2tldDwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPjEyIHllYXJzIGFuZCBBYm92ZTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkdWx0UXVhbnRpdHlDaGFuZ2UoLTEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57YWR1bHRRdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtciB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkdWx0UXVhbnRpdHlDaGFuZ2UoMSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgK1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtbC00XCI+UHJpY2U6ICR7YWR1bHRQcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hpbGRyZW4gVGlja2V0cyBTZWN0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5DaGlsZHJlbiBUaWNrZXQ8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5CZWxvdyAxMiB5ZWFyczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoaWxkcmVuUXVhbnRpdHlDaGFuZ2UoLTEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57Y2hpbGRyZW5RdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtciB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoaWxkcmVuUXVhbnRpdHlDaGFuZ2UoMSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgK1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtbC00XCI+UHJpY2U6ICR7Y2hpbGRyZW5QcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVG90YWwgQ29zdCBTZWN0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggZmxleC1jb2wgaXRlbXMtZW5kXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5Ub3RhbCBDb3N0PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCB0ZXh0LTJ4bFwiPiR7dG90YWxDb3N0LnRvRml4ZWQoMil9PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDb250cm9sIEJ1dHRvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJ9XG4gICAgICAgID5cbiAgICAgICAgICBDbGVhclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hlY2tvdXR9XG4gICAgICAgID5cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlja2V0Qm9va2luZztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRpY2tldEJvb2tpbmciLCJhZHVsdFByaWNlIiwiY2hpbGRyZW5QcmljZSIsImFkdWx0UXVhbnRpdHkiLCJzZXRBZHVsdFF1YW50aXR5IiwiY2hpbGRyZW5RdWFudGl0eSIsInNldENoaWxkcmVuUXVhbnRpdHkiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQWR1bHRRdWFudGl0eUNoYW5nZSIsImNoYW5nZSIsInByZXYiLCJNYXRoIiwibWF4IiwiaGFuZGxlQ2hpbGRyZW5RdWFudGl0eUNoYW5nZSIsInRvdGFsQ29zdCIsImhhbmRsZUNsZWFyIiwiaGFuZGxlQ2hlY2tvdXQiLCJhbGVydCIsInRvRml4ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/ticket.tsx\n"));

/***/ })

});