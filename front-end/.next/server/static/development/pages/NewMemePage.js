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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/NewMemePage.js":
/*!******************************!*\
  !*** ./pages/NewMemePage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/actions/UserActions */ "./config/actions/UserActions.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Template */ "./components/Template.js");
/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/css/index.css */ "./static/css/index.css");
/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_index_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\react\\sauce\\front-end\\pages\\NewMemePage.js";

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
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          marginTop: "15%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))));
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
  temApelido: _config_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["temApelido"]
})(Index));

/***/ }),

/***/ "./static/css/index.css":
/*!******************************!*\
  !*** ./static/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/NewMemePage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/NewMemePage.js */"./pages/NewMemePage.js");


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

/***/ })

/******/ });
//# sourceMappingURL=NewMemePage.js.map