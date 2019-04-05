import { actionTypes } from './../types'

const INITIAL_STATE = {
  lastUpdate: 0
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case actionTypes.MUDA_NOME:
    return { ...state, nome: action.payload }
    default:
      return state;
  }
};
