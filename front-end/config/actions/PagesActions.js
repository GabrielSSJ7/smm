import { actionTypes } from "./../types";
import axios from "axios";

export function fetchPagesBySearchBar(key) {
  const data = JSON.parse(localStorage.getItem("data")) || null;

  const instance = axios.create({
    headers: { Authorization: data ? `bearer ${data.token}` : false }
  });

  return dispatch => {
    instance
      .get(`${actionTypes.URL}resultsup?search_query=${key}`, {
        order: "upvote",
        token: data ? data.token : null
      })
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_PAGES_SEARCH_BAR_SUCESSO,
          payload: res.data
        });
      })
      .catch(erro => {
        console.log(erro);
        dispatch({ type: "" });
      });
  };
}

export function subscribeUserPage(id) {
  console.log('====================================');
  console.log("subscribeUserPage");
  console.log('====================================');
  const data = JSON.parse(localStorage.getItem("data")) || null;
  const instance = axios.create({
    headers: {
      Authorization: data ? `bearer ${data.token}` : false
    }
  });

  return dispatch => {
    instance
      .post(`${actionTypes.URL}subscribe?option=up`, { id_page: id })
      .then(res => {
        dispatch({
          type: actionTypes.SUBSCRIBE_USER_PAGE_SUCCESS,
          payload: true
        });
      })
      .catch(erro => {
        dispatch({ type: actionTypes.SUBSCRIBE_USER_PAGE_ERRO, payload: erro });
      });
  };
}

export function fetchListOfSubscribed(type, id) {
  console.log('====================================');
  console.log("fetchListOfSubscribed");
  console.log('====================================');
  const data = JSON.parse(localStorage.getItem("data")) || null;
  const instance = axios.create({
    headers: {
      Authorization: data ? `bearer ${data.token}` : false
    }
  });

  return dispatch => {
    instance
      .get(`${actionTypes.URL}getallsubscribers?option=${type}&id_page=${id}`, { id_page: id })
      .then(res => {

        dispatch({
          type: actionTypes.FETCH_LIST_OF_SUBSCRIBERS,
          payload: res.data
        });
      })
      .catch(erro => {
        dispatch({ type: actionTypes.SUBSCRIBE_USER_PAGE_ERRO, payload: erro });
      });
  };
}

export function fetchMemeBySearchBar(key) {
  const data = JSON.parse(localStorage.getItem("data")) || null;

  const instance = axios.create({
    headers: { Authorization: data ? `bearer ${data.token}` : false }
  });

  return dispatch => {
    instance
      .get(`${actionTypes.URL}results?search_query=${key}`, {
        order: "upvote",
        token: data ? data.token : null
      })
      .then(res => {
  

        dispatch({
          type: actionTypes.FETCH_MEMES_SEARCH_BAR_SUCESSO,
          payload: res.data
        });
      })
      .catch(erro => {
        console.log(erro);
        dispatch({ type: "" });
      });
  };
}
