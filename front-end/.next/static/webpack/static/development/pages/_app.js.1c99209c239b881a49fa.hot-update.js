webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  result: ""
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

/***/ })

})
//# sourceMappingURL=_app.js.1c99209c239b881a49fa.hot-update.js.map