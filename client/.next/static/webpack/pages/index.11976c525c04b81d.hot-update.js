"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/users.tsx":
/*!*************************!*\
  !*** ./pages/users.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserCard/UserCard */ \"./components/UserCard/UserCard.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skeleton/Skeleton */ \"./components/Skeleton/Skeleton.tsx\");\n/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorboundary */ \"./pages/errorboundary.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query ALL_USERS {\\n    users  {\\n      nodes {\\n           id\\n          name\\n          address\\n          email\\n          phone        \\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: grid;\\ngrid-template-rows: auto;\\ngrid-row-gap: 15px;\\nwidth: 60%;\\n\\n@media screen and (max-width:680px){\\n  margin:auto;\\n  display: grid;\\n  grid-template-columns: repeat(1, 100%);\\n  width: 80%;\\n  font-size: var(--font-size-p-small);\\n}\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ALL_USERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());\nconst Users = ()=>{\n    _s();\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(ALL_USERS);\n    console.log(data);\n    // const showTheFirstTwent = data.slice(0,20);\n    const loadMoreData = ()=>{};\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n        lineNumber: 33,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_errorboundary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n        lineNumber: 34,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Users, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nconst Grid = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = Grid;\nvar _c, _c1;\n$RefreshReg$(_c, \"Users\");\n$RefreshReg$(_c1, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNZO0FBQ007QUFDUjtBQUNjO0FBQ2pCO0FBRTFDLE1BQU1PLFlBQVlILG1EQUFHQTtBQWN0QixNQUFNSSxRQUFRLElBQU07O0lBQ2hCLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFHUix3REFBUUEsQ0FBQ0k7SUFFMUNLLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWiw4Q0FBOEM7SUFFOUMsTUFBTUcsZUFBZSxJQUFNLENBRTNCO0lBRUEsSUFBSUwsU0FBUyxxQkFBTyw4REFBQ0oscUVBQWNBOzs7OztJQUNuQyxJQUFJSyxPQUFPLHFCQUFPLDhEQUFDSixzREFBYUE7Ozs7O0lBRWhDLHFCQUNJOzswQkFDSSw4REFBQ1M7O2tDQUNHLDhEQUFDYixxRUFBUUE7Ozs7O2tDQUNULDhEQUFDQSxxRUFBUUE7Ozs7O2tDQUNULDhEQUFDQSxxRUFBUUE7Ozs7O2tDQUNULDhEQUFDQSxxRUFBUUE7Ozs7O2tDQUNULDhEQUFDQSxxRUFBUUE7Ozs7O2tDQUNULDhEQUFDQSxxRUFBUUE7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRCxpRUFBTUE7Ozs7Ozs7QUFJbkI7R0E1Qk1POztRQUMrQkwsb0RBQVFBOzs7S0FEdkNLO0FBOEJOLCtEQUFlQSxLQUFLQSxFQUFBO0FBRXBCLE1BQU1PLE9BQU9mLDJEQUFVO01BQWpCZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy50c3g/OGNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckNhcmQvVXNlckNhcmQnXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgU2tlbGV0b25Mb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2VsZXRvbi9Ta2VsZXRvbidcbmltcG9ydCBFcnJvcmJvdW5kYXJ5IGZyb20gJy4vZXJyb3Jib3VuZGFyeSdcblxuIGNvbnN0IEFMTF9VU0VSUyA9IGdxbGBcbiAgcXVlcnkgQUxMX1VTRVJTIHtcbiAgICB1c2VycyAge1xuICAgICAgbm9kZXMge1xuICAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgICBwaG9uZSAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEFMTF9VU0VSUyk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIC8vIGNvbnN0IHNob3dUaGVGaXJzdFR3ZW50ID0gZGF0YS5zbGljZSgwLDIwKTtcblxuICAgIGNvbnN0IGxvYWRNb3JlRGF0YSA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPFNrZWxldG9uTG9hZGVyIC8+XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yYm91bmRhcnkgLz5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICAgICAgICA8VXNlckNhcmQgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxCdXR0b24gLz5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzXG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbmdyaWQtcm93LWdhcDogMTVweDtcbndpZHRoOiA2MCU7XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjgwcHgpe1xuICBtYXJnaW46YXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTAwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXAtc21hbGwpO1xufVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCdXR0b24iLCJVc2VyQ2FyZCIsInVzZVF1ZXJ5IiwiZ3FsIiwiU2tlbGV0b25Mb2FkZXIiLCJFcnJvcmJvdW5kYXJ5IiwiQUxMX1VTRVJTIiwiVXNlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxvYWRNb3JlRGF0YSIsIkdyaWQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users.tsx\n"));

/***/ })

});