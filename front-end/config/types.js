export const actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  MUDA_NOME: "muda_nome",
  MUDA_EMAIL: "muda_email",
  MUDA_SENHA: "muda_senha",
  URL: "http://localhost:4000/",
  //URL: "https://smm-back.herokuapp.com/",
  
  CADASTRADO_SUCESSO: "CADASTRADO_SUCESSO",
  CADASTRADO_ERRO: "cadastro_erro",
  CADASTRO_APELIDO: "cadastro_apelido",
  LOGIN_SUCESSO: "LOGIN_SUCESSO",
  LOGIN_ERRO: "LOGIN_ERRO",
  LOGIN_FACEBOOK_SUCESSO: "LOGIN_FACEBOOK_SUCESSO",
  MUDA_NICKNAME: "muda_nickname",
  TEM_APELIDO_SUCESSO: "TEMAPELIDOSUCESSO",
  FETCH_SUBSCRIBED_PAGES: "fetchsubscribedpages",
  FETCH_LIST_OF_SUBSCRIBERS: "aaaaaaaasaadadfrff",
  FETCH_PAGES_FOR_POST: "uhsaushauhs",

  FETCH_POSTS_SEARCH_BAR_SUCESSO: "fetchpostssearchbarsucesso",
  FETCH_PAGES_SEARCH_BAR_SUCESSO: "FEUFHUHAUF",
  FETCH_MEMES_SEARCH_BAR_SUCESSO: "fetchmemessearchbarsucesso",
  UP_OR_DOWN_VOTE: "upordownvote",
  FETCH_POST_COMMENTS: "fetchpostcomments",
  POST_SUCCESS:"suhdaus",

  UPLOAD_PROGRESS: "UPLOADFJASIJF",

  SUBSCRIBE_USER_PAGE_SUCCESS: "subscribeuserpagesuccess",
  SUBSCRIBE_USER_PAGE_ERRO: "subscribeuserpageerro",

  //NEW POST 
  CHANGE_NEW_POST_ID_USER_PAGE: "changeiduserpage",
  CHANGE_NEW_POST_TITLE: "changenewpostitle",
  CHANGE_NEW_POST_DESCRIPTION: "changenewpsotdescription",
  CHANGE_NEW_POST_CATEGORIES: "changenewpostcategories",
  CHANGE_NEW_POST_KEYWORDS: "CHANGEnewpostkeywords",
  CHANGE_NEW_POST_ISYOURPROFILE: "changenewpostisyourprofile",
  CHANGE_NEW_POST_MEDIA_UPLOAD: "changenewpostmediaupload",
  CHANGE_NEW_POST_TRIGGER: "changenewujshfu"

};

export const FACEBOOK_PROFILE_PIC_URL = userId => {
  return `https://graph.facebook.com/${userId}/picture?type=large`;
};
