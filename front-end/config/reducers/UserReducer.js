import { actionTypes } from './../types'

const INITIAL_STATE = {
  lastUpdate: 0,
  light: false,
  count: 0,
  nome: "",
  email: "",
  password: "",
  result: "",
  resultNick: "",
  show: false,
  nick: ""
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case actionTypes.MUDA_NOME:
    return { ...state, nome: action.payload }

    case actionTypes.MUDA_EMAIL:
    return { ...state, email: action.payload }

    case actionTypes.MUDA_SENHA:
    return { ...state, password: action.payload }

    case actionTypes.CADASTRADO_SUCESSO:
    return { ...state, result: action.payload }

    case actionTypes.CADASTRADO_ERRO:
    return { ...state, result: action.payload }

    case actionTypes.LOGIN_SUCESSO:
    return { ...state, result: action.payload, show: action.show }

    case actionTypes.LOGIN_ERRO:
    return { ...state, result: action.payload }

    case actionTypes.LOGIN_FACEBOOK_SUCESSO:
    return { ...state, show: action.show }

    case actionTypes.MUDA_NICKNAME:
    return { ...state, nick: action.payload, resultNick: action.result }

    case actionTypes.CADASTRO_APELIDO:
    return { ...state, show: false }

    case actionTypes.TEM_APELIDO_SUCESSO:
    return { ...state, show: action.payload }

    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: INITIAL_STATE.count
      });
    default:
      return state;
  }
};
