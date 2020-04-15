import React, { Component } from "react";
import { addArticle } from "../../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LOGGEDIN_USER_USERNAME, ARTICLES_PAGE_URL } from "../../constants";
import ArticleForm from "./ArticleForm";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.article = {
      title: "",
      body: "",
    };
  }
  saveArticle = (article) => {
    let newArticle = this.createArticle();
    newArticle.title = article.title;
    newArticle.body = article.body;
    this.props.addArticle(newArticle);
    this.props.history.push(ARTICLES_PAGE_URL);
  };
  createArticle = () => {
    let newArticle = {
      title: "",
      body: "",
      author: "",
      created_at: "",
      id: "",
    };
    const date = new Date();
    newArticle.author = localStorage.getItem(LOGGEDIN_USER_USERNAME);
    newArticle.created_at = "".concat(
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
    return newArticle;
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
