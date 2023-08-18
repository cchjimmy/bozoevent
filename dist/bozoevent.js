/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bozoevent", [], factory);
	else if(typeof exports === 'object')
		exports["bozoevent"] = factory();
	else
		root["bozoevent"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = (function () {\n  var eventStack = [];\n  var eventCallbacks = {};\n  var events = {};\n\n  return {\n    createEvent(type = \"\", properties = {}) {\n      eventCallbacks[type] = {};\n      events[type] = properties;\n      return type;\n    },\n\n    dispatchEvent(type = \"\") {\n      if (!events[type]) return;\n      eventStack.push(type);\n    },\n\n    on(type = \"\", callback = () => { }) {\n      let callbacks = eventCallbacks[type];\n      if (!callbacks) return;\n      let id = crypto.randomUUID();\n      eventCallbacks[type][id] = callback;\n      return id;\n    },\n\n    removeListener(type = \"\", id = \"\") {\n      if (!events[type]) return;\n      delete eventCallbacks[type][id];\n    },\n\n    removeEvent(type = \"\") {\n      delete eventCallbacks[type];\n    },\n\n    executeEvents() {\n      for (let i = 0; i < eventStack.length; i++) {\n        let callbacks = eventCallbacks[eventStack[i]];\n        let event = events[eventStack[i]];\n        for (let id in callbacks) {\n          callbacks[id](event);\n        }\n        // have to free up the stack regardless the number of listeners\n        eventStack.splice(i, 1);\n        i--;\n      }\n    }\n  };\n})()\n\n//# sourceURL=webpack://bozoevent/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});