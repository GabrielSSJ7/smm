webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  MUDA_NOME: "muda_nome",
  MUDA_EMAIL: "muda_email",
  MUDA_SENHA: "muda_senha",
  URL: "http://localhost:4000/",
  CADASTRADO_SUCESSO: "CADASTRADO_SUCESSO",
  CADASTRADO_ERRO: "cadastro_erro",
  LOGIN_SUCESSO: "LOGIN_SUCESSO",
  LOGIN_ERRO: "LOGIN_ERRO"
};
var FACEBOOK_PROFILE_PIC_URL = function FACEBOOK_PROFILE_PIC_URL(userId) {
  return "https://graph.facebook.com/".concat(userId, "/picture?type=large");
};

/***/ })

})
//# sourceMappingURL=_app.js.5d655111f5cf17b75270.hot-update.js.map