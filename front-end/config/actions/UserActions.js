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

export const mudaSenha = texto => {
  return {
    type: actionTypes.MUDA_SENHA,
    payload: texto
  };
};

export const cadastrar = data => {
  return dispatch => {
    Axios.post(`${actionTypes.URL}signin`, data)
      .then(res => {
        console.log(res);
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
        console.log(res);
        if (res.data) {
          localStorage.setItem("authToken", res.data.token);

          Axios.defaults.headers.common["Authorization"] = `bearer ${
            res.data.token
          }`;

          dispatch(loginSucesso());
        } else {
        }
      })
      .catch(erro => {
        console.log(erro);
        dispatch(loginErro(erro));
      });
  };
};

const loginSucesso = () => {
  return {
    type: actionTypes.LOGIN_SUCESSO,
    payload: true
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
          var url = "/me?fields=name,email";

          FB.api(url, function(response) {
            console.log("Facebook", response);
            const data = {
              nome: response.name,
              email: response.email,
              foto: FACEBOOK_PROFILE_PIC_URL(response.id)
            };

            dispatch(loginFacebookSucesso());

            Axios.post(`${actionTypes.URL}signin-with-facebook`, data)
              .then(res => {
                localStorage.setItem("authToken", res.data.token);

                Axios.defaults.headers.common["Authorization"] = `bearer ${
                  res.data.token
                }`; // for all requests

                Router.push("/");
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
  return {
    type: "face"
  };
};
