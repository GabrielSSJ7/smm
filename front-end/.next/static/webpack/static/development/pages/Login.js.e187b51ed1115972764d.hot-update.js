webpackHotUpdate("static\\development\\pages\\Login.js",{

/***/ "./config/actions/UserActions.js":
/*!***************************************!*\
  !*** ./config/actions/UserActions.js ***!
  \***************************************/
/*! exports provided: mudaNome, mudaEmail, mudaSenha, cadastrar, entrar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaNome", function() { return mudaNome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaEmail", function() { return mudaEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaSenha", function() { return mudaSenha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadastrar", function() { return cadastrar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entrar", function() { return entrar; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./config/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


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
var mudaSenha = function mudaSenha(texto) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MUDA_SENHA,
    payload: texto
  };
};
var cadastrar = function cadastrar(data) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "signin"), data).then(function (res) {
      console.log(res);

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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].URL, "login"), data).then(function (res) {
      console.log(res);

      if (res.data) {
        dispatch(loginSucesso());
      } else {}
    }).catch(function (erro) {
      console.log(erro.response.data);
      dispatch(loginErro(erro));
    });
  };
};

var loginSucesso = function loginSucesso() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCESSO,
    payload: true
  };
};

var loginErro = function loginErro(erro) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_ERRO,
    payload: erro.response.data
  };
};

/***/ })

})
//# sourceMappingURL=Login.js.e187b51ed1115972764d.hot-update.js.map