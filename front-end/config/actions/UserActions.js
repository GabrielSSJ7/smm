import { actionTypes, FACEBOOK_PROFILE_PIC_URL } from "../types";
import Router from "next/router";
import Axios from "axios";
export const mudaNome = texto => {
  return {
    type: actionTypes.MUDA_NOME,
    payload: texto
  };
};

export const mudaEmail = texto => {
  return {
    type: actionTypes.MUDA_EMAIL,
    payload: texto
  };
};

export const mudaNickName = texto => {
  if (texto.length > 0) {
    return dispatch => {
      Axios.get(`${actionTypes.URL}buscaapelido/${texto}`).then(res => {
        console.log("USERACTION: mudaNick", res);
        dispatch({
          type: actionTypes.MUDA_NICKNAME,
          payload: texto,
          result: res.data
        });
      });
    };
  } else {
    return {
      type: actionTypes.MUDA_NICKNAME,
      payload: texto,
      result: ""
    };
  }
};

export const cadastrarApelido = nick => {
  const instance = Axios.create({
    headers: { Authorization: `bearer ${localStorage.getItem("authToken")}` }
  });

  return dispatch => {
    instance
      .post(`${actionTypes.URL}adicionaapelido`, {
        nick,
        token: localStorage.getItem("authToken")
      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("nick", nick);
          dispatch({
            type: actionTypes.CADASTRO_APELIDO,
            payload: true
          });
          Router.push("/");
        }
      });
  };
};

export const mudaSenha = texto => {
  return {
    type: actionTypes.MUDA_SENHA,
    payload: texto
  };
};

export const temApelido =  () => {
  return async dispatch => {
    const authToken = await localStorage.getItem("authToken");
    console.log(authToken)
    const instance = Axios.create({
      headers: {
        Authorization: `bearer ${authToken}`
      }
    });

    instance
      .post(`${actionTypes.URL}temapelido`, {
        token: authToken
      })
      .then(res => {
        console.log(res.data);
        if (res.data) {
          dispatch({ type: actionTypes.TEM_APELIDO_SUCESSO, payload: true });
          Router.push("/");
        } else {
          dispatch({ type: actionTypes.TEM_APELIDO_SUCESSO, payload: false });
          //Router.push("/Apelido");
        }
      });
  };
};

export const cadastrar = data => {
  return dispatch => {
    Axios.post(`${actionTypes.URL}signin`, data)
      .then(res => {
        if (res.data) {
          dispatch(cadastroSucesso());
        } else {
        }
      })
      .catch(erro => {
        console.log(erro.response.data);
        dispatch(cadastroErro(erro));
      });
  };
};

const cadastroSucesso = () => {
  Router.push("/Login");
  return {
    type: actionTypes.CADASTRADO_SUCESSO,
    payload: true
  };
};

const cadastroErro = erro => {
  return {
    type: actionTypes.CADASTRADO_ERRO,
    payload: erro.response.data
  };
};

export const entrar = data => {
  return dispatch => {
    Axios.post(`${actionTypes.URL}login`, data)
      .then(res => {
        if (res.data) {
          localStorage.setItem("authToken", res.data.token);
          localStorage.setItem("nick", res.data.nick);

          Axios.defaults.headers.common["Authorization"] = `bearer ${
            res.data.token
          }`;

          dispatch(loginSucesso());
        } else {
        }
      })
      .catch(erro => {
        dispatch(loginErro(erro));
      });
  };
};

const loginSucesso = () => {
  Router.push("/");
  return {
    type: actionTypes.LOGIN_SUCESSO,
    payload: true,
    show: true
  };
  
};

const loginErro = erro => {
  return {
    type: actionTypes.LOGIN_ERRO,
    payload: erro.response.data
  };
};

export const loginWithFacebook = () => {
  return dispatch => {
    FB.login(
      function(response) {
        if (response.authResponse) {
          let email =null;
          var url = "/me?fields=name,email";

          FB.api(url, function(response) {
            console.log("Facebook", response);
            email = response.email;
            const data = {
              nome: response.name,
              email: response.email,
              foto: FACEBOOK_PROFILE_PIC_URL(response.id)
            };

            dispatch(loginFacebookSucesso());

            Axios.post(`${actionTypes.URL}signin-with-facebook`, data)
              .then(res => {
                localStorage.setItem("authToken", res.data.token);
                Axios.post(`${actionTypes.URL}login`, {email, password: "facebook" })
                .then(res => {
                  localStorage.setItem("nick", res.data.nick);
                })

                Axios.defaults.headers.common["Authorization"] = `bearer ${
                  res.data.token
                }`; // for all requests

                //Router.push("/");
              })
              .catch(err => {
                console.log(err);
              });
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "email" }
    );
  };
};

const loginFacebookSucesso = () => {
  
  Router.push("/");
  return {
    type: actionTypes.LOGIN_FACEBOOK_SUCESSO
    // show: true
  };
};
