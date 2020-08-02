import React, { Component } from "react";
import { addArticle } from "actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LOGGEDIN_USER_ID, ARTICLES_PAGE_URL } from "constants.js";
import ArticleForm from "Components/Articles/ArticleForm";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.article = {
      title: "",
      body: "",
    };
  }
  saveArticle = (article) => {
    let newArticle = {
      title: "",
      body: "",
      user_id: "",
    };
    newArticle.title = article.title;
    newArticle.body = article.body;
    newArticle.user_id = localStorage.getItem(LOGGEDIN_USER_ID) || "";
    this.props.addArticle(newArticle);
    this.props.history.push(ARTICLES_PAGE_URL);
  };

  render() {
    return (
      <ArticleForm
        article={this.article}
        saveArticle={this.saveArticle}
        header="New Article"
      />
    );
  }
}

export default connect(null, {
  addArticle,
})(withRouter(AddArticle));
