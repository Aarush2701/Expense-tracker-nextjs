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

/***/ "./RefrshHandler.js":
/*!**************************!*\
  !*** ./RefrshHandler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RefreshHandler)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction RefreshHandler({ setIsAuthenticated }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (localStorage.getItem(\"token\")) {\n            setIsAuthenticated(true);\n            if (router.pathname === \"/\" || router.pathname === \"/login\" || router.pathname === \"/signup\") {\n                router.push(\"/home\");\n            }\n        }\n    }, [\n        router,\n        setIsAuthenticated\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWZyc2hIYW5kbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ007QUFFekIsU0FBU0UsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRTtJQUMzRCxNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssYUFBYUMsT0FBTyxDQUFDLFVBQVU7WUFDakNILG1CQUFtQjtZQUNuQixJQUNFQyxPQUFPRyxRQUFRLEtBQUssT0FDcEJILE9BQU9HLFFBQVEsS0FBSyxZQUNwQkgsT0FBT0csUUFBUSxLQUFLLFdBQ3BCO2dCQUNBSCxPQUFPSSxJQUFJLENBQUM7WUFDZDtRQUNGO0lBQ0YsR0FBRztRQUFDSjtRQUFRRDtLQUFtQjtJQUUvQixPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1uZXh0anMvLi9SZWZyc2hIYW5kbGVyLmpzP2YzODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmcmVzaEhhbmRsZXIoeyBzZXRJc0F1dGhlbnRpY2F0ZWQgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XG4gICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQodHJ1ZSk7XG4gICAgICBpZiAoXG4gICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgfHxcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9sb2dpblwiIHx8XG4gICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCJcbiAgICAgICkge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3JvdXRlciwgc2V0SXNBdXRoZW50aWNhdGVkXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiUmVmcmVzaEhhbmRsZXIiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGF0aG5hbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./RefrshHandler.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RefrshHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RefrshHandler */ \"./RefrshHandler.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RefrshHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setIsAuthenticated: setIsAuthenticated\n            }, void 0, false, {\n                fileName: \"E:\\\\Expense-Tracker\\\\frontend-nextjs\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                isAuthenticated: isAuthenticated\n            }, void 0, false, {\n                fileName: \"E:\\\\Expense-Tracker\\\\frontend-nextjs\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"E:\\\\Expense-Tracker\\\\frontend-nextjs\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNpQjtBQUNiO0FBQ2U7QUFDRDtBQUVoQyxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR04sK0NBQVFBLENBQUM7SUFFdkQscUJBQ0U7OzBCQUNFLDhEQUFDRCxzREFBY0E7Z0JBQUNPLG9CQUFvQkE7Ozs7OzswQkFDcEMsOERBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVDLGlCQUFpQkE7Ozs7OzswQkFDM0MsOERBQUNKLDBEQUFjQTs7Ozs7OztBQUdyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLW5leHRqcy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgUmVmcmVzaEhhbmRsZXIgZnJvbSBcIi4uL1JlZnJzaEhhbmRsZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzQXV0aGVudGljYXRlZCwgc2V0SXNBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UmVmcmVzaEhhbmRsZXIgc2V0SXNBdXRoZW50aWNhdGVkPXtzZXRJc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVmcmVzaEhhbmRsZXIiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();