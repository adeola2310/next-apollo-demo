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

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color: var(--dark-purple);\\ncolor: var(--white);\\noutline: 0;\\nborder: 0;\\n-webkit-appearance: button;\\ncursor: pointer;\\nfont-size: var(--font-size-p);\\nborder-radius: 5px;\\npadding: 1rem 2rem;\\nmargin-top: 3rem;\\n@media only screen and (max-width: 4000px){\\nfont-size: var(--font-size-p-small);\\npadding: 1rem;\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Button = (param)=>{\n    let { onClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonWrapper, {\n        type: \"button\",\n        \"data-testid\": \"more-button\",\n        onClick: onClick,\n        children: \"Load more...\"\n    }, void 0, false, {\n        fileName: \"/Users/adeolaadekoyejo/Desktop/next-apollo-demo/client/components/Button/Button.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nconst ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject());\n_c1 = ButtonWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"ButtonWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNaO0FBTXJDLE1BQU1FLFNBQTJDLFNBQWU7UUFBZCxFQUFDQyxRQUFPLEVBQUM7SUFDdkQscUJBQ0ksOERBQUNDO1FBQWNDLE1BQUs7UUFBU0MsZUFBWTtRQUFjSCxTQUFTQTtrQkFBUzs7Ozs7O0FBSWpGO0tBTk1EO0FBUU4sK0RBQWVBLE1BQU1BLEVBQUE7QUFHckIsTUFBTUUsZ0JBQWdCSCw4REFBYTtNQUE3QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeD80MTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3Bze1xuICAgIG9uQ2xpY2s6ICgpPT52b2lkXG59XG5cbmNvbnN0IEJ1dHRvbjogRnVuY3Rpb25Db21wb25lbnQ8VXNlckNhcmRQcm9wPiAgPSAoe29uQ2xpY2t9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbldyYXBwZXIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdGVzdGlkPVwibW9yZS1idXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgIExvYWQgbW9yZS4uLlxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmJ1dHRvbmBcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5vdXRsaW5lOiAwO1xuYm9yZGVyOiAwO1xuLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG5jdXJzb3I6IHBvaW50ZXI7XG5mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wKTtcbmJvcmRlci1yYWRpdXM6IDVweDtcbnBhZGRpbmc6IDFyZW0gMnJlbTtcbm1hcmdpbi10b3A6IDNyZW07XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMDBweCl7XG5mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1wLXNtYWxsKTtcbnBhZGRpbmc6IDFyZW07XG59XG5gOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJCdXR0b25XcmFwcGVyIiwidHlwZSIsImRhdGEtdGVzdGlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button/Button.tsx\n"));

/***/ })

});