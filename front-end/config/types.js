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
  LOGIN_SUCESSO: "LOGIN_SUCESSO",
  LOGIN_ERRO: "LOGIN_ERRO",
  LOGIN_FACEBOOK_SUCESSO: "LOGIN_FACEBOOK_SUCESSO",
  MUDA_NICKNAME: "muda_nickname",
  TEM_APELIDO_SUCESSO: "TEMAPELIDOSUCESSO"
};

export const FACEBOOK_PROFILE_PIC_URL = userId => {
  return `https://graph.facebook.com/${userId}/picture?type=large`;
};
