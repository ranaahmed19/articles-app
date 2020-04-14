import articles from "./Data/articles.json";
import { LOGGEDIN_USER_USERNAME, LOGGEDIN_USER_TOKEN } from "./constants";

export const FETCH_ARTICLES = "fetchArticles";
export const ADD_ARTICLE = "addArticle";
export const LOGIN = "login";
export const FETCH_ARTICLE = "fetchArticle";

let allArticles = [];

export function fetchArticles() {
  if (allArticles.length === 0) allArticles = articles;
  return {
    type: FETCH_ARTICLES,
    payload: [...allArticles],
  };
}
export function fetchArticle(articleId) {
  if (allArticles.length === 0) allArticles = articles;
  const article = allArticles.find((x) => x.id === articleId);
  return {
    type: FETCH_ARTICLE,
    payload: article,
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
