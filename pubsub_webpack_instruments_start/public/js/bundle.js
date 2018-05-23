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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const InstrumentFamilies = __webpack_require__(/*! ./models/instrument_families.js */ \"./src/models/instrument_families.js\");\nconst InstrumentInfoView = __webpack_require__(/*! ./views/InstrumentInfoView.js */ \"./src/views/InstrumentInfoView.js\");\nconst InstrumentsMenuView = __webpack_require__(/*! ./views/InstrumentsMenuView.js */ \"./src/views/InstrumentsMenuView.js\");\n\nconsole.log('JavaScript Loaded');\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  //Starts Dropdown menu\n  const instrumentsMenuElement = document.querySelector('#instrument-families');\n  const instrumentsMenuView = new InstrumentsMenuView(instrumentsMenuElement);\n  instrumentsMenuView.listenForData();\n\n  // Starts Info View\n  const instrumentInfoElement = document.querySelector('#instrument-info');\n  const instrumentInfoView = new InstrumentInfoView(instrumentInfoElement);\n  instrumentInfoView.receiveSelectedDataFromModel();\n\n  //Starts Model\n  const instrumentsFamilies = new InstrumentFamilies();\n  instrumentsFamilies.sendData();\n  instrumentsFamilies.receiveDataFromMenu();\n  //  Starts events\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/instrument_families.js":
/*!*******************************************!*\
  !*** ./src/models/instrument_families.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentFamilies = function() {\n  this.instrumentFamilies = [\n    {\n      name: 'Brass',\n      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\\'s lips',\n      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']\n    },\n    {\n      name: 'Strings',\n      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',\n      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']\n    },\n    {\n      name: 'Wind',\n      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',\n      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']\n    },\n    {\n      name: 'Percussion',\n      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',\n      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']\n    },\n    {\n      name: 'Keyboard',\n      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',\n      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']\n    }\n  ];\n};\n\nInstrumentFamilies.prototype.sendData = function () {\n  PubSub.publish(\"InstrumentFamilies:send-data\", this.instrumentFamilies);\n}\n\nInstrumentFamilies.prototype.receiveDataFromMenu = function () {\n  PubSub.subscribe('InstrumentsMenuView:send-selected-family', (event) => {\n    const index = event.detail;\n    const selectedFamily = this.instrumentFamilies[index];\n    PubSub.publish(\"InstrumentFamilies:send-familiy\", selectedFamily);\n  });\n}\n\n\nmodule.exports = InstrumentFamilies;\n\n\n//# sourceURL=webpack:///./src/models/instrument_families.js?");

/***/ }),

/***/ "./src/views/InstrumentInfoView.js":
/*!*****************************************!*\
  !*** ./src/views/InstrumentInfoView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentInfoView = function(element) {\n  this.element = element;\n};\n\nInstrumentInfoView.prototype.receiveSelectedDataFromModel = function () {\n  PubSub.subscribe(\"InstrumentFamilies:send-familiy\", (event) => {\n    this.renderInfo(event.detail);\n  });\n\n};\n\nInstrumentInfoView.prototype.renderInfo = function (instrumentFamily) {\n  this.element.innerHTML = '';\n  for (let key in instrumentFamily) {\n      const line = document.createElement('p');\n      line.textContent = `${key}: ${instrumentFamily[key]}`;\n      this.element.appendChild(line);\n  };\n};\n\n\n\n\nmodule.exports = InstrumentInfoView;\n\n\n//# sourceURL=webpack:///./src/views/InstrumentInfoView.js?");

/***/ }),

/***/ "./src/views/InstrumentsMenuView.js":
/*!******************************************!*\
  !*** ./src/views/InstrumentsMenuView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentsMenuView = function (element) {\n  this.element = element;\n}\n\nInstrumentsMenuView.prototype.listenForData = function () {\n  PubSub.subscribe(\"InstrumentFamilies:send-data\", (event) => {\n    this.populateMenu(event.detail);\n    this.onChangeListener();\n  })\n};\n\nInstrumentsMenuView.prototype.populateMenu = function (instrumentsFamilies) {\n  instrumentsFamilies.forEach( (instrumentFamily, index) => {\n    const item = document.createElement('option');\n    item.textContent = instrumentFamily.name;\n    item.value = index;\n    this.element.appendChild(item);\n  });\n};\n\nInstrumentsMenuView.prototype.onChangeListener = function () {\n  this.element.addEventListener('change', (event) => {\n    PubSub.publish('InstrumentsMenuView:send-selected-family', event.target.value);\n  });\n};\n\n\n\nmodule.exports = InstrumentsMenuView;\n\n\n//# sourceURL=webpack:///./src/views/InstrumentsMenuView.js?");

/***/ })

/******/ });