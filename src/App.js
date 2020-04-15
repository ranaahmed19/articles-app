import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import ArticlesPage from "./Components/Articles/ArticlesPage";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/Login/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";
import {
  LOGIN_URL,
  ARTICLES_PAGE_URL,
  HOME_PAGE_URL,
  ADD_ARTICLE_URL,
  ARTICLE_DETAILS_URL,
  EDIT_ARTICLE_URL,
  SIGNUP_URL,
} from "./constants";
import ArticleDetails from "./Components/Articles/ArticleDetails";
import EditArticle from "./Components/Articles/EditArticle";
import AddArticle from "./Components/Articles/AddArticle";
import SignupPage from "./Components/SignupPage";
import AppHeader from "./Components/AppHeader";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path={LOGIN_URL} component={LoginPage} />
        <Route path={SIGNUP_URL} component={SignupPage} />
        <PrivateRoute path={ADD_ARTICLE_URL} component={AddArticle} />
        <PrivateRoute
          path={EDIT_ARTICLE_URL + "/:id"}
          component={EditArticle}
        />
        <Route path={ARTICLE_DETAILS_URL + "/:id"} component={ArticleDetails} />
        <NavBar>
          <Route path={ARTICLES_PAGE_URL} component={ArticlesPage} />
          <Route path={HOME_PAGE_URL} component={HomePage} />
          <Route exact path="/" component={HomePage} />
        </NavBar>
      </Switch>
    </div>
  );
}

export default App;
