/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/himood/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/himood/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @file demo示例\n * @author sikazhang\n */\nvar Himood =\n/*#__PURE__*/\nfunction () {\n  function Himood() {\n    _classCallCheck(this, Himood);\n  }\n\n  _createClass(Himood, [{\n    key: \"setFaceRandom\",\n\n    /**\n     * 生成随机颜文字表情包\n     *\n     * @return {string} 表情包结果\n     * @public\n     */\n    value: function setFaceRandom() {\n      // 生成1-10的随机整数\n      var num = Math.floor(Math.random() * 10 + 1);\n      var result = '';\n\n      switch (num) {\n        case 1:\n          result = 'ヾ(*´▽‘*)ﾉ';\n          break;\n\n        case 2:\n          result = '(ฅ´ω`ฅ)';\n          break;\n\n        case 3:\n          result = '(ง •̀_•́)ง';\n          break;\n\n        case 4:\n          result = '（//▽//）';\n          break;\n\n        case 5:\n          result = '(/= _ =)/~┴┴';\n          break;\n\n        case 6:\n          result = '[]~(￣▽￣)~*';\n          break;\n\n        case 7:\n          result = '(=￣ω￣=)';\n          break;\n\n        case 8:\n          result = '(“▔□▔)';\n          break;\n\n        case 9:\n          result = '( ´･◡･` )';\n          break;\n\n        case 10:\n          result = '彩蛋！新年快乐！';\n          break;\n\n        default:\n          break;\n      }\n\n      return result;\n    }\n  }]);\n\n  return Himood;\n}();\n\nexports.default = Himood;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/himood/dist/index.js?");

/***/ }),

/***/ "./node_modules/himood/index.js":
/*!**************************************!*\
  !*** ./node_modules/himood/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _dist = _interopRequireDefault(__webpack_require__(/*! ./dist */ \"./node_modules/himood/dist/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = _dist.default;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/himood/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _himood = __webpack_require__(/*! himood */ \"./node_modules/himood/index.js\");\n\nvar _himood2 = _interopRequireDefault(_himood);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar himood = new _himood2.default();\n\n// 获取按钮\n/**\n * @file example\n * @author sikazhang\n * @date 2020/1/03\n */\nvar btn = document.getElementById('button');\nvar result = document.getElementById('input');\n\nbtn.addEventListener('click', function () {\n  var mood = himood.setFaceRandom();\n  result.innerText = mood;\n  alert('\\u606D\\u559C\\uD83C\\uDF89\\u83B7\\u5F97\\u4E13\\u5C5E\\u8868\\u60C5\\u5305' + mood + '\\uFF0C\\u4ECA\\u5929\\u4E5F\\u8981\\u5F00\\u5FC3\\u9E2D\\uFF5E');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });