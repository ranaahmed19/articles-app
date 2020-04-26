import { LOGGEDIN_USER_USERNAME, LOGGEDIN_USER_TOKEN } from "constants.js";
import axios from "axios";
export const FETCH_ARTICLES = "fetchArticles";
export const ADD_ARTICLE = "addArticle";
export const LOGIN = "login";
export const FETCH_ARTICLE = "fetchArticle";
export const DELETE_ARTICLE = "deleteArticle";
export const EDIT_ARTICLE = "editArticle";
export const SIGNUP = "signup";
export const LOGOUT = "logout";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

export function fetchArticles() {
  const request = axios.get("http://localhost:3000/api/v1/articles");
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_ARTICLES, payload: data });
    });
  };
}
export function fetchArticle(articleId) {
  const request = axios.get(
    "http://localhost:3000/api/v1/articles/" + articleId
  );
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_ARTICLE, payload: data.article });
    });
  };
}

export function addArticle(article) {
  const request = axios.post("http://localhost:3000/api/v1/articles", {
    article,
  });
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: ADD_ARTICLE, payload: data.article });
    });
  };
}

export function login(user) {
  const request = axios.post("http://localhost:3000/api/v1/login", {
    user,
  });
  return (dispatch) => {
    request.then(({ data }) => {
      localStorage.setItem(LOGGEDIN_USER_USERNAME, data.user.username);
      localStorage.setItem(LOGGEDIN_USER_TOKEN, "token");
      dispatch({ type: LOGIN, payload: data.user });
    });
  };
}

export function deleteArticle(articleId) {
  const request = axios.delete(
    "http://localhost:3000/api/v1/articles/" + articleId
  );
  return (dispatch) => {
    request.then(({ data }) =>
      dispatch({ type: DELETE_ARTICLE, payload: data.article })
    );
  };
}

export function editArticle(updatedArticle) {
  const request = axios.patch(
    "http://localhost:3000/api/v1/articles/" + updatedArticle.id,
    {
      updatedArticle,
    }
  );
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: EDIT_ARTICLE, payload: data.article });
    });
  };
}

export function signup(user) {
  const request = axios.post("http://localhost:3000/api/v1/users", {
    user,
  });
  return (dispatch) => {
    request.then(({ data }) => {
      localStorage.setItem(LOGGEDIN_USER_USERNAME, data.user.username);
      localStorage.setItem(LOGGEDIN_USER_TOKEN, "token");
      dispatch({ type: SIGNUP, payload: data.user });
    });
  };
}
export function logout() {
  const request = axios.delete("http://localhost:3000/api/v1/logout");
  return (dispatch) => {
    request.then(({ data }) => {
      localStorage.setItem(LOGGEDIN_USER_USERNAME, "");
      localStorage.setItem(LOGGEDIN_USER_TOKEN, "");
      dispatch({ type: LOGOUT, payload: {} });
    });
  };
}
