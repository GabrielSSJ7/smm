import axios from "axios";
import { actionTypes } from "../types";
import * as firebase from "firebase";
import Axios from "axios";

export function fetchPostsBySearchBar(key) {
  const data = JSON.parse(localStorage.getItem("data")) || null;
  return dispatch => {
    axios
      .post(`${actionTypes.URL}searchBar?search_query=${key}`, {
        order: "upvote",
        token: data ? data.token : null
      })
      .then(res => {
        
        dispatch({
          type: actionTypes.FETCH_POSTS_SEARCH_BAR_SUCESSO,
          payload: res.data
        });
      })
      .catch(erro => {
        console.log(erro);
        dispatch({ type: "" });
      });
  };
}


export function upOrDownVote(data) {
  const localData = JSON.parse(localStorage.getItem("data")) || null;
  return dispatch => {
    if (localData) {
      const instance = axios.create({
        headers: { Authorization: `bearer ${localData.token}` }
      });

      instance
        .post(`${actionTypes.URL}updownvote`, data)
        .then(res => {
          console.log(res.data);
          dispatch({ type: actionTypes.UP_OR_DOWN_VOTE, payload: res.data });
        })
        .catch(error => {
          dispatch({ type: actionTypes.UP_OR_DOWN_VOTE });
        });
    }
  };
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
    headers: { Authorization: `bearer ${localData.token}` }
  });
  const option = data.option;
  delete data.option;

  return dispatch => {
    instance
      .post(`${actionTypes.URL}comment?option=${option}`, data)
      .then(res => {
        console.log(res.data);
        dispatch({ type: actionTypes.FETCH_POST_COMMENTS, payload: res.data });
      })
      .catch(_ => {});
  };
}

export function fetchPostComments(data) {
  console.log(data);
  return dispatch => {
    axios
      .get(
        `${actionTypes.URL}fetchcomments?option=${data.option}&id_post=${
          data.id
        }`
      )
      .then(res => {
        
        dispatch({ type: actionTypes.FETCH_POST_COMMENTS, payload: res.data });
      })
      .catch(_ => {
        console.log("fetchPostComments:ERROR => ", _);
        dispatch({ type: "" });
      });
  };
}

export function fetchSubscribedPages() {
  const localData = JSON.parse(localStorage.getItem("data"));
  const instance = axios.create({
    headers: { Authorization: `bearer ${localData.token}` }
  });

  return dispatch => {
    instance
      .get(`${actionTypes.URL}getsubscribedpagesforchoosepage`)
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_SUBSCRIBED_PAGES,
          payload: res.data
        });
      })
      .catch(err => {});
  };
}

export function fetchPagesForPost(key) {
  const localData = JSON.parse(localStorage.getItem("data"));
  const instance = axios.create({
    headers: { Authorization: `bearer ${localData.token}` }
  });

  return dispatch => {
    instance
      .get(`${actionTypes.URL}searchPageForPost?search=${key}`)
      .then(res => {
        console.log(res.data);
        
        dispatch({
          type: actionTypes.FETCH_PAGES_FOR_POST,
          payload: res.data
        });
      })
      .catch(err => {});
  };
}

export function toPost(file, data) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnG4uYx02fxqVQj5ky5tTFD0NkHsWT3q4",
    authDomain: "saucememes-f125d.firebaseapp.com",
    databaseURL: "https://saucememes-f125d.firebaseio.com",
    projectId: "saucememes-f125d",
    storageBucket: "saucememes-f125d.appspot.com",
    messagingSenderId: "191879555990"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  // Create a root reference
  var storageRef = firebase.storage().ref();
  // Create the file metadata
  var metadata = {
    contentType: file.type
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child("images/" + file.name).put(file, metadata);
  return dispatch => {
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        dispatch({ type: actionTypes.UPLOAD_PROGRESS, payload: progress})
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function(error) {
        console.log(error.message)
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
       
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const indexType = file.type.indexOf("/");
          const fileType = file.type.substring(0, indexType);
          let route = "";
          if (data.isYourProfile) {
            delete data.id_user_page;
            delete data.isYourProfile;
            route = "createpostuser";
          } else {
            delete data.isYourProfile;
            route = "createpostuserpage";
          }
          const d = { ...data, midia: downloadURL, mediaType: fileType };
          const localData = JSON.parse(localStorage.getItem("data")) || null;
          const instance = axios.create({
            headers: { Authorization: `bearer ${localData.token}` }
          });

          instance.post(`${actionTypes.URL}${route}`, d).then(r => {
            dispatch({ type: actionTypes.CHANGE_NEW_POST_TRIGGER, payload: false })
            dispatch({ type: actionTypes.POST_SUCCESS, payload: true });
          });
        });
      }
    );
  };
}

export function viewPost(id, type) {
  const token = JSON.parse(localStorage.getItem('data')).token;
  const instance = axios.create({
    headers: { Authorization: `bearer ${token}` }
  });

  return dispatch => {
    instance.post(`${actionTypes.URL}view?option=${type}`, { id_post: id })
    .then(res => {
      dispatch({ type: actionTypes.VIEW_POST_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: actionTypes.VIEW_POST_ERROR, payload: error })
    })
  }
}

export function postDetails(id,type, period) {
  console.log("PostsActions || type ", type);
  
  return dispatch => {
    axios.get(`${actionTypes.URL}postdetails?id_post=${id}&type=${type}&period=${period}`)
    .then(res => {
      //console.log("PostsActions => line:254", res.data);
      dispatch({ type: actionTypes.POST_DETAILS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: actionTypes.POST_DETAILS_ERROR, payload: error });
    })
  }
}

export function changeDetailsPeriod(p){
  return { type: actionTypes.CHANGE_DETAILS_PERIOD, payload: p }
}

//CHANGES
export function changeUploadProgress(up) {
  console.log('====================================');
  console.log("PostActions =>", up);
  console.log('====================================');
  return {type: actionTypes.UPLOAD_PROGRESS, payload: up}
}

export function changeIndexForModal(i){
  return { type: actionTypes.CHANGE_INDEX_FOR_MODAL, payload: i}
}

//NEW POST CHANGES
export function changeNewPostIdUserPage(id) {
  
  return { type: actionTypes.CHANGE_NEW_POST_ID_USER_PAGE, payload: id };
}
export function changeNewPostTitle(title) {
  return { type: actionTypes.CHANGE_NEW_POST_TITLE, payload: title };
}
export function changeNewPostDescription(desc) {
  return { type: actionTypes.CHANGE_NEW_POST_DESCRIPTION, payload: desc };
}
export function changeNewPostKeywords(keywords) {
  return { type: actionTypes.CHANGE_NEW_POST_KEYWORDS, payload: keywords };
}
export function changeNewPostCategories(cats) {
  return { type: actionTypes.CHANGE_NEW_POST_CATEGORIES, payload: cats };
}
export function changeNewPostIsYourProfile(is) {
  return { type: actionTypes.CHANGE_NEW_POST_ISYOURPROFILE, payload: is };
}
export function changeNewPostMediaUpload(m) {
  return { type: actionTypes.CHANGE_NEW_POST_MEDIA_UPLOAD, payload: m }
}
export function changeNewPostTrigger(t) {
  return {type: actionTypes.CHANGE_NEW_POST_TRIGGER, payload: t}
}

