import articles from "./Data/articles.json";
import { LOGGEDIN_USER_USERNAME, LOGGEDIN_USER_TOKEN } from "./constants";

export const FETCH_ARTICLES = "fetchArticles";
export const ADD_ARTICLE = "addArticle";
export const LOGIN = "login";

let allArticles = [];

export function fetchArticles() {
  if (allArticles.length === 0) allArticles = articles;
  return {
    type: FETCH_ARTICLES,
    payload: [...allArticles],
  };
}

export function addArticle(article) {
  allArticles.push(article);
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
}

export function login(user) {
  const loggedInUser = user;
  localStorage.setItem(LOGGEDIN_USER_USERNAME, loggedInUser.username);
  localStorage.setItem(LOGGEDIN_USER_TOKEN, loggedInUser.token);
  return {
    type: LOGIN,
    payload: loggedInUser,
  };
}
