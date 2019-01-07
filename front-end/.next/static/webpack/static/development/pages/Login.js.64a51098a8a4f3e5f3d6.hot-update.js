webpackHotUpdate("static\\development\\pages\\Login.js",{

/***/ "./config/actions/UserActions.js":
/*!***************************************!*\
  !*** ./config/actions/UserActions.js ***!
  \***************************************/
/*! exports provided: mudaNome, mudaEmail, mudaSenha, cadastrar, entrar, loginWithFacebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaNome", function() { return mudaNome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaEmail", function() { return mudaEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mudaSenha", function() { return mudaSenha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadastrar", function() { return cadastrar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entrar", function() { return entrar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithFacebook", function() { return loginWithFacebook; });
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
        localStorage.setItem("authToken", res.data.token);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["Authorization"] = "bearer ".concat(res.data.token);
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
    payload: true
  };
};

var loginErro = function loginErro(erro) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_ERRO,
    payload: erro.response.data
  };
};

var loginWithFacebook = function loginWithFacebook() {
  FB.login(function (response) {
    if (response.authResponse) {
      var url = "/me?fields=name,email";
      FB.api(url, function (response) {
        console.log(response);
        var data = {
          nome: response.name,
          email: response.email // foto: FACEBOOK_PROFILE_PIC_URL(response.id)

        };
        axios.post("".concat(URL, "signin-with-facebook"), data).then(function (res) {
          localStorage.setItem("authToken", res.data.token);
          Cookies.set("Authorization", "bearer ".concat(res.data.token), {
            expires: 1
          });
          axios.defaults.headers.common["Authorization"] = "bearer ".concat(res.data.token); // for all requests

          Router.push("/");
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

/***/ })

})
//# sourceMappingURL=Login.js.64a51098a8a4f3e5f3d6.hot-update.js.map