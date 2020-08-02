import { combineReducers } from "redux";
import ArticlesReducer from "Reducers/ArticlesReducer";
import LoggedInUserReducer from "Reducers/LoggedInUserReducer";
import UsersReducer from "Reducers/UsersReducer";
import ArticleReducer from "Reducers/ArticleReducer";

const reducers = combineReducers({
  articles: ArticlesReducer,
  loggedInUser: LoggedInUserReducer,
  users: UsersReducer,
  article: ArticleReducer,
});

export default reducers;
