/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/preload.ts":
/*!************************!*\
  !*** ./src/preload.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nwindow.addEventListener('DOMContentLoaded', () => {\n    var _a;\n    const replaceText = (selector, text) => {\n        const element = document.getElementById(selector);\n        if (element)\n            element.innerText = text;\n    };\n    for (const dependency of ['chrome', 'node', 'electron']) {\n        replaceText(`${dependency}-version`, (_a = process.versions[dependency]) !== null && _a !== void 0 ? _a : 'unknown');\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7O0lBQy9DLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsRUFBRTtRQUNyRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLE9BQU87WUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUk7SUFDdkMsQ0FBQztJQUVELEtBQUssTUFBTSxVQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQ3ZELFdBQVcsQ0FBQyxHQUFHLFVBQVUsVUFBVSxFQUFFLGFBQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLG1DQUFJLFNBQVMsQ0FBQztLQUNoRjtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaWZ0LWNocm9uaWNsZS8uL3NyYy9wcmVsb2FkLnRzPzA1NmEiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHJlcGxhY2VUZXh0ID0gKHNlbGVjdG9yOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcilcbiAgICBpZiAoZWxlbWVudCkgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0XG4gIH1cblxuICBmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgWydjaHJvbWUnLCAnbm9kZScsICdlbGVjdHJvbiddKSB7XG4gICAgcmVwbGFjZVRleHQoYCR7ZGVwZW5kZW5jeX0tdmVyc2lvbmAsIHByb2Nlc3MudmVyc2lvbnNbZGVwZW5kZW5jeV0gPz8gJ3Vua25vd24nKVxuICB9XG59KVxuXG5leHBvcnQge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/preload.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/preload.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;