import { actionTypes } from "./../types";

const INITIAL_STATE = {
  posts: [],
  pages: [],
  vote: {},
  comments: [],
  pagesSubscribed: [],
  pagesForPost: [],
  result: null,
  indexForModal: 0,

  uploadProgress: 0,

  //NEW POST
  postStatus: false,
  postTrigger: false,
  idPageSelected: 0,
  titulo: "",
  descricao: "",
  keywords: [],
  categorias: [],
  isYourProfile: false,
  mediaForUpload: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SEARCH_BAR_SUCESSO:
      return { ...state, posts: action.payload };

    case actionTypes.FETCH_PAGES_SEARCH_BAR_SUCESSO:
      return { ...state, pages: action.payload }

    case actionTypes.UP_OR_DOWN_VOTE:
      return { ...state, vote: { ...action.payload[0] } };

    case actionTypes.FETCH_POST_COMMENTS:
      return { ...state, comments: action.payload };

    case actionTypes.FETCH_SUBSCRIBED_PAGES:
      return { ...state, pagesSubscribed: action.payload };

    case actionTypes.FETCH_PAGES_FOR_POST:
      return { ...state, pagesForPost: action.payload };

    case actionTypes.POST_SUCCESS:
      return { ...state, result: action.payload };

    case actionTypes.UPLOAD_PROGRESS:
      return { ...state, uploadProgress: action.payload }

    case actionTypes.CHANGE_INDEX_FOR_MODAL: 
      return { ...state, indexForModal: action.payload }

    //NEW POST
    case actionTypes.CHANGE_NEW_POST_ID_USER_PAGE:
      return { ...state, idPageSelected: action.payload };
    case actionTypes.CHANGE_NEW_POST_TITLE:
      return { ...state, titulo: action.payload };
    case actionTypes.CHANGE_NEW_POST_DESCRIPTION:
      return { ...state, descricao: action.payload };
    case actionTypes.CHANGE_NEW_POST_KEYWORDS:
      return { ...state, keywords: action.payload };
    case actionTypes.CHANGE_NEW_POST_CATEGORIES:
      return { ...state, categorias: action.payload };
    case actionTypes.CHANGE_NEW_POST_ISYOURPROFILE:
      return { ...state, isYourProfile: action.payload };
    case actionTypes.CHANGE_NEW_POST_MEDIA_UPLOAD:
      return { ...state, mediaForUpload: action.payload }
    case actionTypes.CHANGE_NEW_POST_TRIGGER:
      return { ...state, postTrigger: action.payload}

    default:
      return state;
  }
};
