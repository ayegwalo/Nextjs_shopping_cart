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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TicketBooking = (param)=>{\n    let { adultPrice, childrenPrice } = param;\n    _s();\n    const [adultQuantity, setAdultQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [childrenQuantity, setChildrenQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleAdultQuantityChange = (change)=>{\n        setAdultQuantity((prev)=>Math.max(prev + change, 0));\n    };\n    const handleChildrenQuantityChange = (change)=>{\n        setChildrenQuantity((prev)=>Math.max(prev + change, 0));\n    };\n    const totalCost = adultQuantity * adultPrice + childrenQuantity * childrenPrice;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Ticket Booking\"\n            }, void 0, false, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold\",\n                        children: \"Adult Ticket\"\n                    }, void 0, false, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600\",\n                        children: [\n                            \"Price: $\",\n                            adultPrice.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white px-4 py-2 rounded-l\",\n                                onClick: ()=>handleAdultQuantityChange(-1),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2\",\n                                children: adultQuantity\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 text-white px-4 py-2 rounded-r\",\n                                onClick: ()=>handleAdultQuantityChange(1),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold\",\n                        children: \"Children Ticket\"\n                    }, void 0, false, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600\",\n                        children: [\n                            \"Price: $\",\n                            childrenPrice.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 text-white px-4 py-2 rounded-l\",\n                                onClick: ()=>handleChildrenQuantityChange(-1),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2\",\n                                children: childrenQuantity\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green-500 text-white px-4 py-2 rounded-r\",\n                                onClick: ()=>handleChildrenQuantityChange(1),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold\",\n                        children: \"Total Cost\"\n                    }, void 0, false, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-800 text-2xl\",\n                        children: [\n                            \"$\",\n                            totalCost.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/CHR/Desktop/React Things/Proper_tutorail_basics/src/component/ticket.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TicketBooking, \"QfGbFPC3iWoP8hmcSGzyQU+SwNM=\");\n_c = TicketBooking;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketBooking);\nvar _c;\n$RefreshReg$(_c, \"TicketBooking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGlja2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFPakMsTUFBTUMsZ0JBQWdCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQXNCOztJQUN0RSxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBUztJQUMzRCxNQUFNLENBQUNNLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFTO0lBRWpFLE1BQU1RLDRCQUE0QixDQUFDQztRQUNqQ0osaUJBQWlCLENBQUNLLE9BQVNDLEtBQUtDLEdBQUcsQ0FBQ0YsT0FBT0QsUUFBUTtJQUNyRDtJQUVBLE1BQU1JLCtCQUErQixDQUFDSjtRQUNwQ0Ysb0JBQW9CLENBQUNHLE9BQVNDLEtBQUtDLEdBQUcsQ0FBQ0YsT0FBT0QsUUFBUTtJQUN4RDtJQUVBLE1BQU1LLFlBQ0pWLGdCQUFnQkYsYUFBYUksbUJBQW1CSDtJQUVsRCxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUV4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDdEMsOERBQUNHO3dCQUFFSCxXQUFVOzs0QkFBZ0I7NEJBQVNkLFdBQVdrQixPQUFPLENBQUM7Ozs7Ozs7a0NBQ3pELDhEQUFDTDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUNDTCxXQUFVO2dDQUNWTSxTQUFTLElBQU1kLDBCQUEwQixDQUFDOzBDQUMzQzs7Ozs7OzBDQUdELDhEQUFDZTtnQ0FBS1AsV0FBVTswQ0FBYVo7Ozs7OzswQ0FDN0IsOERBQUNpQjtnQ0FDQ0wsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNZCwwQkFBMEI7MENBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTUwsOERBQUNPOztrQ0FDQyw4REFBQ0c7d0JBQUdGLFdBQVU7a0NBQXdCOzs7Ozs7a0NBQ3RDLDhEQUFDRzt3QkFBRUgsV0FBVTs7NEJBQWdCOzRCQUFTYixjQUFjaUIsT0FBTyxDQUFDOzs7Ozs7O2tDQUM1RCw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FDQ0wsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNVCw2QkFBNkIsQ0FBQzswQ0FDOUM7Ozs7OzswQ0FHRCw4REFBQ1U7Z0NBQUtQLFdBQVU7MENBQWFWOzs7Ozs7MENBQzdCLDhEQUFDZTtnQ0FDQ0wsV0FBVTtnQ0FDVk0sU0FBUyxJQUFNVCw2QkFBNkI7MENBQzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTUwsOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQXdCOzs7Ozs7a0NBQ3RDLDhEQUFDRzt3QkFBRUgsV0FBVTs7NEJBQXlCOzRCQUFFRixVQUFVTSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEU7R0FqRU1uQjtLQUFBQTtBQW1FTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L3RpY2tldC50c3g/MTdiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgVGlja2V0Qm9va2luZ1Byb3BzIHtcbiAgYWR1bHRQcmljZTogbnVtYmVyO1xuICBjaGlsZHJlblByaWNlOiBudW1iZXI7XG59XG5cbmNvbnN0IFRpY2tldEJvb2tpbmcgPSAoeyBhZHVsdFByaWNlLCBjaGlsZHJlblByaWNlIH06IFRpY2tldEJvb2tpbmdQcm9wcykgPT4ge1xuICBjb25zdCBbYWR1bHRRdWFudGl0eSwgc2V0QWR1bHRRdWFudGl0eV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbY2hpbGRyZW5RdWFudGl0eSwgc2V0Q2hpbGRyZW5RdWFudGl0eV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIGNvbnN0IGhhbmRsZUFkdWx0UXVhbnRpdHlDaGFuZ2UgPSAoY2hhbmdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRBZHVsdFF1YW50aXR5KChwcmV2KSA9PiBNYXRoLm1heChwcmV2ICsgY2hhbmdlLCAwKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hpbGRyZW5RdWFudGl0eUNoYW5nZSA9IChjaGFuZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldENoaWxkcmVuUXVhbnRpdHkoKHByZXYpID0+IE1hdGgubWF4KHByZXYgKyBjaGFuZ2UsIDApKTtcbiAgfTtcblxuICBjb25zdCB0b3RhbENvc3QgPVxuICAgIGFkdWx0UXVhbnRpdHkgKiBhZHVsdFByaWNlICsgY2hpbGRyZW5RdWFudGl0eSAqIGNoaWxkcmVuUHJpY2U7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBtYXgtdy1tZCBteC1hdXRvIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5UaWNrZXQgQm9va2luZzwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+QWR1bHQgVGlja2V0PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlByaWNlOiAke2FkdWx0UHJpY2UudG9GaXhlZCgyKX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkdWx0UXVhbnRpdHlDaGFuZ2UoLTEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIC1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57YWR1bHRRdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZHVsdFF1YW50aXR5Q2hhbmdlKDEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICtcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPkNoaWxkcmVuIFRpY2tldDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5QcmljZTogJHtjaGlsZHJlblByaWNlLnRvRml4ZWQoMil9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGlsZHJlblF1YW50aXR5Q2hhbmdlKC0xKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+e2NoaWxkcmVuUXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hpbGRyZW5RdWFudGl0eUNoYW5nZSgxKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICArXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+VG90YWwgQ29zdDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC0yeGxcIj4ke3RvdGFsQ29zdC50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlja2V0Qm9va2luZztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRpY2tldEJvb2tpbmciLCJhZHVsdFByaWNlIiwiY2hpbGRyZW5QcmljZSIsImFkdWx0UXVhbnRpdHkiLCJzZXRBZHVsdFF1YW50aXR5IiwiY2hpbGRyZW5RdWFudGl0eSIsInNldENoaWxkcmVuUXVhbnRpdHkiLCJoYW5kbGVBZHVsdFF1YW50aXR5Q2hhbmdlIiwiY2hhbmdlIiwicHJldiIsIk1hdGgiLCJtYXgiLCJoYW5kbGVDaGlsZHJlblF1YW50aXR5Q2hhbmdlIiwidG90YWxDb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoMyIsInAiLCJ0b0ZpeGVkIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/ticket.tsx\n"));

/***/ })

});