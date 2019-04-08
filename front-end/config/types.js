export const actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  MUDA_NOME: "muda_nome",
  MUDA_EMAIL: "muda_email",
  MUDA_SENHA: "muda_senha",
  URL: "http://localhost:4000/",
  CADASTRADO_SUCESSO: "CADASTRADO_SUCESSO",
  CADASTRADO_ERRO: "cadastro_erro",
  CADASTRO_APELIDO: "cadastro_apelido",
  LOGIN_SUCESSO: "LOGIN_SUCESSO",
  LOGIN_ERRO: "LOGIN_ERRO",
  LOGIN_FACEBOOK_SUCESSO: "LOGIN_FACEBOOK_SUCESSO",
  MUDA_NICKNAME: "muda_nickname",
  TEM_APELIDO_SUCESSO: "TEMAPELIDOSUCESSO",

  FETCH_POSTS_SEARCH_BAR_SUCESSO: "fetchpostssearchbarsucesso",
  UP_OR_DOWN_VOTE: "upordownvote",
  FETCH_POST_COMMENTS: "fetchpostcomments"
};

export const FACEBOOK_PROFILE_PIC_URL = userId => {
  return `https://graph.facebook.com/${userId}/picture?type=large`;
};
