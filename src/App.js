import React from "react";
import "App.css";
import NavBar from "Components/NavBar";
import { Route, Switch } from "react-router-dom";
import ArticlesPage from "Components/Articles/ArticlesPage";
import HomePage from "Components/HomePage";
import LoginPage from "Components/Login/LoginPage";
import PrivateRoute from "Components/PrivateRoute";
import {
  LOGIN_URL,
  ARTICLES_PAGE_URL,
  HOME_PAGE_URL,
  ADD_ARTICLE_URL,
  ARTICLE_DETAILS_URL,
  EDIT_ARTICLE_URL,
} from "constants.js";
import ArticleDetails from "Components/Articles/ArticleDetails";
import EditArticle from "Components/Articles/EditArticle";
import AddArticle from "Components/Articles/AddArticle";
function App() {
  return (
    <div className="App">
      <div className="page-main">
        <h1 className="header">React App</h1>
      </div>
      <Switch>
        <Route path={LOGIN_URL} component={LoginPage} />
        <PrivateRoute path={ADD_ARTICLE_URL} component={AddArticle} />
        <PrivateRoute
          path={EDIT_ARTICLE_URL}
          component={EditArticle}
        />
        <Route path={ARTICLE_DETAILS_URL} component={ArticleDetails} />
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
