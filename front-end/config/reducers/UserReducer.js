import { actionTypes } from './../types'

const INITIAL_STATE = {
  lastUpdate: 0,
  light: false,
  count: 0,
  nome: "",
  email: "",
  password: "",
  result: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
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
    return { ...state, result: action.payload }

    case actionTypes.LOGIN_ERRO:
    return { ...state, result: action.payload }

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
