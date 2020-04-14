import { combineReducers } from "redux";
import ArticlesReducer from "./ArticlesReducer";
import LoggedInUserReducer from "./LoggedInUserReducer";
import UsersReducer from "./UsersReducer";
import ArticleReducer from "./ArticleReducer";

const reducers = combineReducers({
  articles: ArticlesReducer,
  loggedInUser: LoggedInUserReducer,
  users: UsersReducer,
  article: ArticleReducer,
});

export default reducers;
