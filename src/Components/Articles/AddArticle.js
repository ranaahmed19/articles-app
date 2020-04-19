import React, { Component } from "react";
import { addArticle } from "actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LOGGEDIN_USER_USERNAME, ARTICLES_PAGE_URL } from "constants.js";
import ArticleForm from "Components/Articles/ArticleForm";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        body: "",
      },
      error: {
        title: "",
        body: "",
      },
    };
  }
  saveArticle = () => {
    if (this.validateForm()) {
      let newArticle = this.createArticle();
      newArticle.title = this.state.article.title;
      newArticle.body = this.state.article.body;
      this.props.addArticle(newArticle);
      this.props.history.push(ARTICLES_PAGE_URL);
    }
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

  handleOnChange = (e) => {
    const article = this.state.article;
    article[e.target.name] = e.target.value;
    this.setState({ article });
  };

  validateForm() {
    const article = this.state.article;
    const error = {};
    if (article.title === "" || article.body === "") {
      if (article.title === "") error.title = "This Field is required";
      if (article.body === "") error.body = "This Field is required";
      this.setState({ error });
      return false;
    }
    this.setState({ error });
    return true;
  }

  render() {
    return (
      <ArticleForm
        article={this.state.article}
        handleOnChange={this.handleOnChange}
        error={this.state.error}
        saveArticle={this.saveArticle}
        header="New Article"
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    article: state.article,
  };
}
export default connect(mapStateToProps, {
  addArticle,
})(withRouter(AddArticle));
