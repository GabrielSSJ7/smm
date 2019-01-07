webpackHotUpdate("static\\development\\pages\\Cadastro.js",{

/***/ "./config/actions/UserActions.js":
/*!***************************************!*\
  !*** ./config/actions/UserActions.js ***!
  \***************************************/
/*! exports provided: mudaNome, mudaEmail, mudaSenha, cadastrar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaNome", function() { return mudaNome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaEmail", function() { return mudaEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaSenha", function() { return mudaSenha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadastrar", function() { return cadastrar; });
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
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CADASTRADO_SUCESSO,
          payload: true
        });
      } else {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CADASTRADO_ERRO,
          payload: false
        });
      }
    });
  };
};

/***/ })

})
//# sourceMappingURL=Cadastro.js.8c5995dc219c10f66838.hot-update.js.map