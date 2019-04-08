import axios from 'axios';
import { actionTypes } from '../types';

export function fetchPostsBySearchBar(key) {
    const data = JSON.parse(localStorage.getItem("data")) || null;
    return dispatch => {

        axios.post(`${actionTypes.URL}searchBar?search_query=${key}`, { order: "upvote", token: data ? data.token : null })
            .then(res => {
                console.log(res.data);
                dispatch({ type: actionTypes.FETCH_POSTS_SEARCH_BAR_SUCESSO, payload: res.data })
            })
            .catch(erro => {
                console.log(erro);
                dispatch({ type: "" })
            });
    }
}

export function upOrDownVote(data) {

    const localData = JSON.parse(localStorage.getItem("data")) || null;
    return dispatch => {
        if (localData) {
            const instance = axios.create({
                headers: { Authorization: `bearer ${localData.token}` }
            });

            instance.post(`${actionTypes.URL}updownvote`, data)
                .then(res => {
                    console.log("PostAction :: " , res.data)
                    dispatch({ type: actionTypes.UP_OR_DOWN_VOTE, payload: res.data })
                })
                .catch(error => {
                    dispatch({ type: actionTypes.UP_OR_DOWN_VOTE })
                });
        }

    }
}
 /*
   * COMENTÁRIO
   * URL Param
   *
   * option ('i', 'u', 'd')
   *
   * Corpo da requisição
   *
   * token in header - Authorization bearer token
   * id_post -> int
   * type ('m','u','up') -> string
   * comment (se for inserir ou atualizar) -> string
   * id_comment (se for excluír ou atualizar) -> int
   *
   */
export function comment(data) {
    const localData = JSON.parse(localStorage.getItem("data"));
    const instance = axios.create({
        headers: { Authorization: `bearer ${localData.token}`}
    });
    const option = data.option;
    delete data.option;

    return dispatch => {
        instance.post(`${actionTypes.URL}comment?option=${option}`, data)
        .then(res => {
            console.log(res.data);
            dispatch({ type: "" })
        })
        .catch(_ => {

        })
    }
}

export function fetchPostComments(data) {
    console.log(data);
    return dispatch => {
        axios.get(`${actionTypes.URL}fetchcomments?option=${data.option}&id_post=${data.id}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: actionTypes.FETCH_POST_COMMENTS, payload: res.data });
        })
        .catch(_ => {
            console.log("fetchPostComments:ERROR => ", _);
            dispatch({ type: "" })
        });
    }
}