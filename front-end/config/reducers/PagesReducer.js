import { actionTypes } from "./../types";

const INITIAL_STATE = {
  pages: [],
  memes: [],
  followers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PAGES_SEARCH_BAR_SUCESSO:
      return { ...state, pages: action.payload };

    case actionTypes.FETCH_MEMES_SEARCH_BAR_SUCESSO:
      return { ...state, memes: action.payload };
    
    case actionTypes.FETCH_LIST_OF_SUBSCRIBERS:
      return { ...state, followers: action.payload}
      
    default:
      return state;
  }
};
