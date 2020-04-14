import { combineReducers } from "redux";
import ArticlesReducer from "./ArticlesReducer";
import LoggedInUserReducer from "./LoggedInUserReducer";
import UsersReducer from "./UsersReducer";

const reducers = combineReducers({
  articles: ArticlesReducer,
  loggedInUser: LoggedInUserReducer,
  users: UsersReducer,
});

export default reducers;
