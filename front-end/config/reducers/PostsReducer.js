import { actionTypes } from './../types'

const INITIAL_STATE = {
  posts: [],
  vote: {},
  comments: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case actionTypes.FETCH_POSTS_SEARCH_BAR_SUCESSO:
    return { ...state, posts: action.payload }

    case actionTypes.UP_OR_DOWN_VOTE:
    return { ...state, vote: { ...action.payload[0] } }

    
    case actionTypes.FETCH_POST_COMMENTS:
    return { ...state, comments: action.payload }
    
    default:
      return state;
  }
};
