"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_users_tsx",{

/***/ "./pages/users.tsx":
/*!*************************!*\
  !*** ./pages/users.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var _components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserCard/UserCard */ \"./components/UserCard/UserCard.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skeleton/Skeleton */ \"./components/Skeleton/Skeleton.tsx\");\n/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorboundary */ \"./pages/errorboundary.tsx\");\n/* harmony import */ var _queries_getUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries/getUsers */ \"./queries/getUsers.ts\");\n/* harmony import */ var _components_NoUser_NoUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NoUser/NoUser */ \"./components/NoUser/NoUser.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: grid;\\ngrid-template-rows: auto;\\ngrid-row-gap: 15px;\\nwidth: 60%;\\n\\n@media screen and (max-width:680px){\\n  margin:auto;\\n  display: grid;\\n  grid-template-columns: repeat(1, 100%);\\n  width: 80%;\\n  font-size: var(--font-size-p-small);\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Users = ()=>{\n    _s();\n    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(20);\n    const [dummyData, setDummyData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]);\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(_queries_getUsers__WEBPACK_IMPORTED_MODULE_7__.ALL_USERS);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if (data) {\n            var _data_users;\n            setDummyData(data === null || data === void 0 ? void 0 : (_data_users = data.users) === null || _data_users === void 0 ? void 0 : _data_users.slice(offset, limit + offset));\n        }\n    }, [\n        offset,\n        limit,\n        data\n    ]);\n    const loadMoreUsers = ()=>{\n        setLimit(limit + 20);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n            lineNumber: 29,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_errorboundary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n            lineNumber: 32,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (!data.users) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NoUser_NoUser__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Grid, {\n                \"data-testid\": \"user-grid\",\n                children: dummyData === null || dummyData === void 0 ? void 0 : dummyData.map((user, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserCard_UserCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        user: user\n                    }, i, false, {\n                        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>loadMoreUsers()\n            }, void 0, false, {\n                fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/pages/users.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Users, \"Cgm3Yx/5mINtXZI0O3a1byyHvvQ=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nconst Grid = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c1 = Grid;\nvar _c, _c1;\n$RefreshReg$(_c, \"Users\");\n$RefreshReg$(_c1, \"Grid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDWTtBQUNNO0FBQ2I7QUFDbUI7QUFDakI7QUFDSTtBQUNDO0FBQ0w7QUFFM0MsTUFBTVUsUUFBUSxJQUFNOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBSyxFQUFFO0lBQ2pELE1BQU0sRUFBRVEsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFHaEIseURBQVFBLENBQUNHLHdEQUFTQTtJQUduREUsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUdXLE1BQUs7Z0JBQ1NBO1lBQWJILGFBQWFHLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsS0FBTUMsS0FBSyxjQUFYRCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUUsTUFBTVYsUUFBUUUsUUFBUUY7UUFDcEQsQ0FBQztJQUNMLEdBQUc7UUFBQ0E7UUFBUUU7UUFBT007S0FBSztJQUV4QixNQUFNRyxnQkFBZ0IsSUFBTTtRQUN4QlIsU0FBU0QsUUFBUTtJQUNyQjtJQUVBLElBQUlJLFNBQVM7UUFDVCxxQkFBTyw4REFBQ2IscUVBQWNBOzs7OztJQUMxQixDQUFDO0lBQ0QsSUFBSWMsT0FBTztRQUNQLHFCQUFPLDhEQUFDYixzREFBYUE7Ozs7O0lBQ3pCLENBQUM7SUFDRCxJQUFJLENBQUNjLEtBQUtDLEtBQUssRUFBRTtRQUNiLHFCQUFPLDhEQUFDYixpRUFBTUE7Ozs7O0lBQ2xCLENBQUM7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNnQjtnQkFBS0MsZUFBWTswQkFFVlQsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXVSxHQUFHLENBQUMsQ0FBQ0MsTUFBV0Msa0JBQ3ZCLDhEQUFDekIscUVBQVFBO3dCQUFTd0IsTUFBTUE7dUJBQVRDOzs7Ozs7Ozs7OzBCQUkzQiw4REFBQzFCLGlFQUFNQTtnQkFBQzJCLFNBQVMsSUFBTU47Ozs7Ozs7O0FBSW5DO0dBeENNWjs7UUFJK0JQLHFEQUFRQTs7O0tBSnZDTztBQTBDTiwrREFBZUEsS0FBS0EsRUFBQTtBQUVwQixNQUFNYSxPQUFPdkIsMkRBQVU7TUFBakJ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy50c3g/OGNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckNhcmQvVXNlckNhcmQnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IFNrZWxldG9uTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2tlbGV0b24vU2tlbGV0b24nXG5pbXBvcnQgRXJyb3Jib3VuZGFyeSBmcm9tICcuL2Vycm9yYm91bmRhcnknXG5pbXBvcnQgeyBBTExfVVNFUlMgfSBmcm9tICcuLi9xdWVyaWVzL2dldFVzZXJzJ1xuaW1wb3J0IE5vVXNlciBmcm9tICcuLi9jb21wb25lbnRzL05vVXNlci9Ob1VzZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGU8bnVtYmVyPigyMCk7XG4gICAgY29uc3QgW2R1bW15RGF0YSwgc2V0RHVtbXlEYXRhXSA9IHVzZVN0YXRlPFtdPihbXSk7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoQUxMX1VTRVJTKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBzZXREdW1teURhdGEoZGF0YT8udXNlcnM/LnNsaWNlKG9mZnNldCwgbGltaXQgKyBvZmZzZXQpKTtcbiAgICAgICAgfVxuICAgIH0sIFtvZmZzZXQsIGxpbWl0LCBkYXRhXSlcblxuICAgIGNvbnN0IGxvYWRNb3JlVXNlcnMgPSAoKSA9PiB7XG4gICAgICAgIHNldExpbWl0KGxpbWl0ICsgMjApO1xuICAgIH07XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPFNrZWxldG9uTG9hZGVyIC8+XG4gICAgfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gPEVycm9yYm91bmRhcnkgLz5cbiAgICB9XG4gICAgaWYgKCFkYXRhLnVzZXJzKSB7XG4gICAgICAgIHJldHVybiA8Tm9Vc2VyIC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxHcmlkIGRhdGEtdGVzdGlkPVwidXNlci1ncmlkXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdW1teURhdGE/Lm1hcCgodXNlcjogYW55LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckNhcmQga2V5PXtpfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVVc2VycygpfSAvPlxuICAgICAgICA8Lz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNcblxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuZ3JpZC1yb3ctZ2FwOiAxNXB4O1xud2lkdGg6IDYwJTtcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2ODBweCl7XG4gIG1hcmdpbjphdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxMDAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcC1zbWFsbCk7XG59XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIkJ1dHRvbiIsIlVzZXJDYXJkIiwidXNlUXVlcnkiLCJTa2VsZXRvbkxvYWRlciIsIkVycm9yYm91bmRhcnkiLCJBTExfVVNFUlMiLCJOb1VzZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJzIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibGltaXQiLCJzZXRMaW1pdCIsImR1bW15RGF0YSIsInNldER1bW15RGF0YSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VycyIsInNsaWNlIiwibG9hZE1vcmVVc2VycyIsIkdyaWQiLCJkYXRhLXRlc3RpZCIsIm1hcCIsInVzZXIiLCJpIiwib25DbGljayIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.tsx\n"));

/***/ })

});