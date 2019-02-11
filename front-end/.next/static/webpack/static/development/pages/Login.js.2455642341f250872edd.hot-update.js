webpackHotUpdate("static\\development\\pages\\Login.js",{

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/actions/UserActions */ "./config/actions/UserActions.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/Template */ "./components/Template.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/types */ "./config/types.js");
var _jsxFileName = "C:\\react\\sauce\\front-end\\pages\\Login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  _createClass(Login, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      return {};
    }
  }]);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(Login, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        show: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("authToken")) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
        this.props.temApelido();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "_entrar",
    value: function _entrar() {
      var data = {
        nome: this.props.nome,
        email: this.props.email,
        password: this.props.password
      };
      this.props.entrar(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.show) {
        //Router.push("/");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-sm-6",
          style: {
            margin: "10% auto"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Escolha seu apelido!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Nickname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "email",
          className: "form-control",
          type: "text",
          onChange: function onChange(e) {
            return _this2.props.mudaNickName(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            textAlign: "center",
            color: "red"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, this.props.result), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-info",
          onClick: function onClick() {
            return _this2._entrar();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Confirmar")))));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6",
        style: {
          margin: "10% auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "email",
        className: "form-control",
        type: "text",
        onChange: function onChange(e) {
          return _this2.props.mudaEmail(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Senha"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "senha",
        className: "form-control",
        type: "password",
        onChange: function onChange(e) {
          return _this2.props.mudaSenha(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: "center",
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, this.props.result), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login100-form-social flex-c-m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          padding: "2%",
          backgroundColor: "#3b5998",
          cursor: "pointer"
        },
        onClick: function onClick() {
          return _this2.props.loginWithFacebook();
        },
        className: "login100-form-social-item flex-c-m bg1 m-r-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          color: "white"
        },
        className: "fa fa-facebook-f",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/Cadastro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "ainda n\xE3o possui um cadastro?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleShow.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Abrir"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick() {
          return _this2._entrar();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Entrar")))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    mudaEmail: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__["mudaEmail"], dispatch),
    mudaSenha: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__["mudaSenha"], dispatch),
    entrar: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__["entrar"], dispatch),
    loginWithFacebook: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__["loginWithFacebook"], dispatch),
    mudaNickName: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__["mudaNickName"], dispatch),
    temApelido: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_5__["temApelido"], dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  console.log("state.main", state.UserReducer.show);
  return {
    email: state.UserReducer.email,
    password: state.UserReducer.password,
    result: state.UserReducer.result,
    show: state.UserReducer.show
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Login));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Login")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Login.js.2455642341f250872edd.hot-update.js.map