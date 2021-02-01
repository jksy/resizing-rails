/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packs/resizing.js":
/*!***************************!*\
  !*** ./packs/resizing.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/video */ \"./src/video.js\");\n\n\n\n//# sourceURL=webpack:///./packs/resizing.js?");

/***/ }),

/***/ "./src/video.js":
/*!**********************!*\
  !*** ./src/video.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Video\": () => (/* binding */ Video)\n/* harmony export */ });\nclass Video {\n  constructor(element) {\n    this.element = element\n    this.element\n  }\n\n  upload() {\n    file = this.element.files[0]\n    prepare(file.name)\n  }\n\n  prepare(filename) {\n    body = JSON.stringify({filename: filename})\n    fetch(prepare_url, {method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: body})\n      .then(response => response.json())\n      .then(data => console.log(data))\n  }\n\n  file_upload(record) {\n    file = this.element.files[0]\n    fetch(record.s3_presigned_url, {method: 'PUT', credentials: 'same-origin', headers: {'Content-Type': file.type}, body: file})\n      .then(response => console.log(response))\n      .then(data => done_upload(record))\n  }\n\n  done_upload(record) {\n    fetch(record.upload_completed_url, {method: 'PUT', credentials: 'same-origin', headers:{'Content-Type': 'application/json'}})\n      .then(response => response.json())\n      .then(data => monitor_state(data))\n  }\n\n  monitor_state(record) {\n    alert('uploaded')\n  }\n\n  // monitor_state(record) {\n  //   _record = record\n  //   intervalID = setInternal(() => fetch(_record.self_url, method: 'GET', credentials: 'same-origin', headers:{'Content-Type': 'application/json'})\n  // }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/video.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./packs/resizing.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;