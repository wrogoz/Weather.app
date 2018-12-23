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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar input = $('#inputLGEx');\nvar thisDay = $('#this-day');\nvar thisDayImg = $('#this-day__img');\nvar tommorow = $('#tommorow-day');\nvar tommorowImg = $('#tommorow-day__img');\nvar afterTommorowDay = $('#after-tommorow-day');\nvar afterTommorowDayImg = $('#after-tommorow-day__img');\nvar cityName = $('#city-name');\n\ninput.keypress(function (e) {\n    if (e.which == 13) {\n\n        //today\n\n\n        var weatherbit = 'https://api.weatherbit.io/v2.0/current?city=' + input.val() + '&key=7e5cfb6fc82247268e54b66455f03017';\n        $.ajax({\n            url: weatherbit,\n\n            method: 'GET'\n\n        }).done(function (resp) {\n            thisDay.text(' Dzi\\u015B: ' + resp.data[0].temp + ' C');\n            thisDayImg.attr('src', 'src/images/' + resp.data[0].weather.icon + '.svg');\n            cityName.addClass('fadeOutUp');\n            setTimeout(function () {\n                cityName.text('' + resp.data[0].city_name);\n                cityName.addClass('fadeInUpBig');\n                setTimeout(function () {\n                    input.val(\"\");\n                }, 500);\n            }, 1000);\n            setTimeout(function () {\n                cityName.removeClass('fadeInUpBig');\n                cityName.removeClass('fadeOutUp');\n            }, 2000);\n        }).fail(function (err) {\n            console.log('error');\n        });\n\n        //tommorow weather\n\n        var weatherNextDay = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + input.val() + '&key=7e5cfb6fc82247268e54b66455f03017&days=1';\n        $.ajax({\n            url: weatherNextDay,\n\n            method: 'GET'\n\n        }).done(function (resp) {\n            tommorow.text(' Jutro: ' + resp.data[0].temp + ' C');\n            tommorowImg.attr('src', 'src/images/' + resp.data[0].weather.icon + '.svg');\n        }).fail(function (err) {\n            console.log('next day forecast error');\n        });\n        //after tommorow weather\n\n        var weatherafterTommorow = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + input.val() + '&key=7e5cfb6fc82247268e54b66455f03017&days=5';\n        $.ajax({\n            url: weatherafterTommorow,\n\n            method: 'GET'\n\n        }).done(function (resp) {\n            afterTommorowDay.text(' Pojutrze: ' + resp.data[0].temp + ' C');\n            afterTommorowDayImg.attr('src', 'src/images/' + resp.data[0].weather.icon + '.png');\n        }).fail(function (err) {\n            console.log('next day forecast error');\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });