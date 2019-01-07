webpackHotUpdate("static\\development\\pages\\Cadastro.js",{

/***/ "./pages/Cadastro.js":
/*!***************************!*\
  !*** ./pages/Cadastro.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/actions/UserActions */ "./config/actions/UserActions.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/Template */ "./components/Template.js");
var _jsxFileName = "C:\\react\\sauce\\front-end\\pages\\Cadastro.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Cadastro =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cadastro, _React$Component);

  _createClass(Cadastro, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      return {};
    }
  }]);

  function Cadastro(props) {
    var _this;

    _classCallCheck(this, Cadastro);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cadastro).call(this, props));
    _this.state = {
      error: ""
    };
    return _this;
  }

  _createClass(Cadastro, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.result) {
        console.log(this.props.result);
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/Login");
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "_cadastrar",
    value: function _cadastrar() {
      var data = {
        nome: this.props.nome,
        email: this.props.email,
        password: this.props.password
      };
      this.props.cadastrar(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6",
        style: {
          margin: "10% auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Nome"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "nome",
        className: "form-control",
        type: "text",
        onChange: function onChange(e) {
          return _this2.props.mudaNome(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: "center",
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.props.result), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick() {
          return _this2._cadastrar();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Cadastrar")))));
    }
  }]);

  return Cadastro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    mudaNome: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["mudaNome"], dispatch),
    mudaEmail: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["mudaEmail"], dispatch),
    mudaSenha: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["mudaSenha"], dispatch),
    cadastrar: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_config_actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["cadastrar"], dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  console.log("state.main", state);
  return {
    nome: state.UserReducer.nome,
    email: state.UserReducer.email,
    password: state.UserReducer.password,
    result: state.UserReducer.result
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Cadastro));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Cadastro")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Cadastro.js.33129c81bd16ff2c07cb.hot-update.js.map