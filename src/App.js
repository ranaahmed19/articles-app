import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import ArticlesPage from "./Components/Articles/ArticlesPage";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/Login/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";
import AddArticle from "./Components/Articles/AddArticle";
import {
  LOGIN_URL,
  ARTICLES_PAGE_URL,
  HOME_PAGE_URL,
  ADD_ARTICLE_URL,
  ARTICLE_DETAILS_URL,
} from "./constants";
import ArticleDetails from "./Components/Articles/ArticleDetails";
function App() {
  return (
    <div className="App">
      <div className="page-main">
        <div className="header">React App</div>
      </div>
      <Switch>
        <Route path={LOGIN_URL} component={LoginPage} />
        <PrivateRoute path={ADD_ARTICLE_URL} component={AddArticle} />
        <PrivateRoute
          path={ARTICLE_DETAILS_URL + "/:id"}
          component={ArticleDetails}
        />
        <NavBar>
          <PrivateRoute path={ARTICLES_PAGE_URL} component={ArticlesPage} />
          <PrivateRoute path={HOME_PAGE_URL} component={HomePage} />
          <PrivateRoute exact path="/" component={HomePage} />
        </NavBar>
      </Switch>
    </div>
  );
}

export default App;
