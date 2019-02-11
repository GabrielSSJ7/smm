module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Template.js":
/*!********************************!*\
  !*** ./components/Template.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\react\\sauce\\front-end\\components\\Template.js";


 // import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel, faUser, faHome, faFire, faPlusSquare, faComment } from '@fortawesome/free-solid-svg-icons'
// library.add(faStroopwafel)
// library.add(faUser)
// library.add(faHome)
// library.add(faFire)
// library.add(faPlusSquare)
// library.add(faComment)

var Template = function Template(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Sauce"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cerulean/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../static/teste.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    rel: "stylesheet",
    integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/jquery/jquery-3.2.1.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/animsition/js/animsition.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/bootstrap/js/popper.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/bootstrap/js/bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/select2/select2.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/daterangepicker/moment.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/daterangepicker/daterangepicker.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/countdowntime/countdowntime.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/js/main.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./components/clock.js":
/*!*****************************!*\
  !*** ./components/clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\react\\sauce\\front-end\\components\\clock.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2814028825" + " " + ((light ? 'light' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, format(new Date(lastUpdate)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2814028825",
    css: "div.jsx-2814028825{padding:15px;display:inline-block;color:#82fa58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-2814028825{background-color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxyZWFjdFxcc2F1Y2VcXGZyb250LWVuZFxcY29tcG9uZW50c1xcY2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3dCLEFBUVMsYUFQRCxTQVF2QixZQVBnQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiQzpcXHJlYWN0XFxzYXVjZVxcZnJvbnQtZW5kXFxjb21wb25lbnRzXFxjbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0ID8gJ2xpZ2h0JyA6ICcnfT5cclxuICAgICAge2Zvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjODJmYTU4O1xyXG4gICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdCA9IHQgPT5cclxuICBgJHtwYWQodC5nZXRVVENIb3VycygpKX06JHtwYWQodC5nZXRVVENNaW51dGVzKCkpfToke3BhZCh0LmdldFVUQ1NlY29uZHMoKSl9YFxyXG5cclxuY29uc3QgcGFkID0gbiA9PiAobiA8IDEwID8gYDAke259YCA6IG4pXHJcbiJdfQ== */\n/*@ sourceURL=C:\\react\\sauce\\front-end\\components\\clock.js */",
    __self: this
  }));
});

var format = function format(t) {
  return "".concat(pad(t.getUTCHours()), ":").concat(pad(t.getUTCMinutes()), ":").concat(pad(t.getUTCSeconds()));
};

var pad = function pad(n) {
  return n < 10 ? "0".concat(n) : n;
};

/***/ }),

/***/ "./components/counter.js":
/*!*******************************!*\
  !*** ./components/counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
var _jsxFileName = "C:\\react\\sauce\\front-end\\components\\counter.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Counter =
/*#__PURE__*/
function (_Component) {
  _inherits(Counter, _Component);

  function Counter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Counter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "increment", function () {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["incrementCount"])());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decrement", function () {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["decrementCount"])());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reset", function () {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["resetCount"])());
    });

    return _this;
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var count = this.props.count;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Count: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.increment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "+1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.decrement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "-1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Reset"));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var count = state.count;
  return {
    count: count
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Counter));

/***/ }),

/***/ "./components/examples.js":
/*!********************************!*\
  !*** ./components/examples.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock */ "./components/clock.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ "./components/counter.js");
var _jsxFileName = "C:\\react\\sauce\\front-end\\components\\examples.js";





function Examples(_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_clock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lastUpdate: lastUpdate,
    light: light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

function mapStateToProps(state) {
  var lastUpdate = state.lastUpdate,
      light = state.light;
  return {
    lastUpdate: lastUpdate,
    light: light
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Examples));

/***/ }),

/***/ "./config/actions/UserActions.js":
/*!***************************************!*\
  !*** ./config/actions/UserActions.js ***!
  \***************************************/
/*! exports provided: mudaNome, mudaEmail, mudaNickName, cadastrarApelido, mudaSenha, temApelido, cadastrar, entrar, loginWithFacebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaNome", function() { return mudaNome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaEmail", function() { return mudaEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaNickName", function() { return mudaNickName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadastrarApelido", function() { return cadastrarApelido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaSenha", function() { return mudaSenha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temApelido", function() { return temApelido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadastrar", function() { return cadastrar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entrar", function() { return entrar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithFacebook", function() { return loginWithFacebook; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./config/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var mudaNome = function mudaNome(texto) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_NOME,
    payload: texto
  };
};
var mudaEmail = function mudaEmail(texto) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_EMAIL,
    payload: texto
  };
};
var mudaNickName = function mudaNickName(texto) {
  if (texto.length > 0) {
    return function (dispatch) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "buscaapelido/").concat(texto)).then(function (res) {
        console.log(res);
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_NICKNAME,
          payload: texto,
          result: res.data
        });
      });
    };
  } else {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_NICKNAME,
      payload: texto,
      result: ""
    };
  }
};
var cadastrarApelido = function cadastrarApelido(nick) {
  var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    headers: {
      Authorization: "bearer ".concat(localStorage.getItem("authToken"))
    }
  });
  return function (dispatch) {
    instance.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "adicionaapelido"), {
      nick: nick,
      token: localStorage.getItem("authToken")
    }).then(function (res) {
      console.log(res);

      if (res.data) {
        dispatch({
          type: ""
        });
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
      }
    });
  };
};
var mudaSenha = function mudaSenha(texto) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_SENHA,
    payload: texto
  };
};
var temApelido = function temApelido() {
  return function (dispatch) {
    var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
      headers: {
        Authorization: "bearer ".concat(localStorage.getItem("authToken"))
      }
    });
    instance.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "temapelido"), {
      token: localStorage.getItem("authToken")
    }).then(function (res) {
      if (res.data) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TEM_APELIDO_SUCESSO,
          payload: false
        });
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
      } else {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TEM_APELIDO_SUCESSO,
          payload: true
        });
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/Apelido");
      }
    });
  };
};
var cadastrar = function cadastrar(data) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "signin"), data).then(function (res) {
      if (res.data) {
        dispatch(cadastroSucesso());
      } else {}
    }).catch(function (erro) {
      console.log(erro.response.data);
      dispatch(cadastroErro(erro));
    });
  };
};

var cadastroSucesso = function cadastroSucesso() {
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/Login");
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CADASTRADO_SUCESSO,
    payload: true
  };
};

var cadastroErro = function cadastroErro(erro) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CADASTRADO_ERRO,
    payload: erro.response.data
  };
};

var entrar = function entrar(data) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "login"), data).then(function (res) {
      if (res.data) {
        localStorage.setItem("authToken", res.data.token);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common["Authorization"] = "bearer ".concat(res.data.token);
        dispatch(loginSucesso());
      } else {}
    }).catch(function (erro) {
      console.log(erro);
      dispatch(loginErro(erro));
    });
  };
};

var loginSucesso = function loginSucesso() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCESSO,
    payload: true,
    show: true
  };
};

var loginErro = function loginErro(erro) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_ERRO,
    payload: erro.response.data
  };
};

var loginWithFacebook = function loginWithFacebook() {
  return function (dispatch) {
    FB.login(function (response) {
      if (response.authResponse) {
        var url = "/me?fields=name,email";
        FB.api(url, function (response) {
          console.log("Facebook", response);
          var data = {
            nome: response.name,
            email: response.email,
            foto: Object(_types__WEBPACK_IMPORTED_MODULE_0__["FACEBOOK_PROFILE_PIC_URL"])(response.id)
          };
          dispatch(loginFacebookSucesso());
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "signin-with-facebook"), data).then(function (res) {
            localStorage.setItem("authToken", res.data.token);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common["Authorization"] = "bearer ".concat(res.data.token); // for all requests
            //Router.push("/");
          }).catch(function (err) {
            console.log(err);
          });
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    }, {
      scope: "email"
    });
  };
};

var loginFacebookSucesso = function loginFacebookSucesso() {
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_FACEBOOK_SUCESSO // show: true

  };
};

/***/ }),

/***/ "./config/reducers/UserReducer.js":
/*!****************************************!*\
  !*** ./config/reducers/UserReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../types */ "./config/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  lastUpdate: 0,
  light: false,
  count: 0,
  nome: "",
  email: "",
  password: "",
  result: "",
  show: false,
  nick: ""
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(action);

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_NOME:
      return _objectSpread({}, state, {
        nome: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_EMAIL:
      return _objectSpread({}, state, {
        email: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_SENHA:
      return _objectSpread({}, state, {
        password: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CADASTRADO_SUCESSO:
      return _objectSpread({}, state, {
        result: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CADASTRADO_ERRO:
      return _objectSpread({}, state, {
        result: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCESSO:
      return _objectSpread({}, state, {
        result: action.payload,
        show: action.show
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_ERRO:
      return _objectSpread({}, state, {
        result: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_FACEBOOK_SUCESSO:
      return _objectSpread({}, state, {
        show: action.show
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_NICKNAME:
      return _objectSpread({}, state, {
        nick: action.payload,
        result: action.result
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TEM_APELIDO_SUCESSO:
      return _objectSpread({}, state, {
        show: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RESET:
      return Object.assign({}, state, {
        count: INITIAL_STATE.count
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./config/reducers/index.js":
/*!**********************************!*\
  !*** ./config/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserReducer */ "./config/reducers/UserReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  UserReducer: _UserReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./config/types.js":
/*!*************************!*\
  !*** ./config/types.js ***!
  \*************************/
/*! exports provided: actionTypes, FACEBOOK_PROFILE_PIC_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACEBOOK_PROFILE_PIC_URL", function() { return FACEBOOK_PROFILE_PIC_URL; });
var actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  MUDA_NOME: "muda_nome",
  MUDA_EMAIL: "muda_email",
  MUDA_SENHA: "muda_senha",
  URL: "http://localhost:4000/",
  CADASTRADO_SUCESSO: "CADASTRADO_SUCESSO",
  CADASTRADO_ERRO: "cadastro_erro",
  LOGIN_SUCESSO: "LOGIN_SUCESSO",
  LOGIN_ERRO: "LOGIN_ERRO",
  LOGIN_FACEBOOK_SUCESSO: "LOGIN_FACEBOOK_SUCESSO",
  MUDA_NICKNAME: "muda_nickname",
  TEM_APELIDO_SUCESSO: "TEMAPELIDOSUCESSO"
};
var FACEBOOK_PROFILE_PIC_URL = function FACEBOOK_PROFILE_PIC_URL(userId) {
  return "https://graph.facebook.com/".concat(userId, "/picture?type=large");
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_examples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/examples */ "./components/examples.js");
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/types */ "./config/types.js");
/* harmony import */ var _config_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/actions/UserActions */ "./config/actions/UserActions.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Template */ "./components/Template.js");
/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/css/index.css */ "./static/css/index.css");
/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_css_index_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\react\\sauce\\front-end\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      // if (localStorage.getItem("authToken")) {
      //   this.props.temApelido();
      // }
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_config_types__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].URL, "validateToken"), {
        token: localStorage.getItem("authToken")
      }).then(function (res) {
        console.log("cdi", res);

        if (!res.data) {
          localStorage.removeItem("authToken");
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common["Authorization"] = "";
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/Login");
        } else {
          _this.props.temApelido();
        }

        console.log("validate Token", res);
      }).catch(function (erro) {});
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {//clearInterval(this.timer)
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          marginTop: "15%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6",
        style: {
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/NewMemePage");
        },
        className: "index-test-buttons",
        id: "create-meme-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/images/new-window.png",
        alt: "nova janela",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "New Meme Page"))))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req; //reduxStore.dispatch(serverRenderClock(isServer))

      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  temApelido: _config_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["temApelido"]
})(Index));

/***/ }),

/***/ "./static/css/index.css":
/*!******************************!*\
  !*** ./static/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: reducer, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/reducers */ "./config/reducers/index.js");
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/types */ "./config/types.js");




 // REDUCERS

var reducer = _config_reducers__WEBPACK_IMPORTED_MODULE_3__["default"]; // ACTIONS

function initializeStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, {}, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map