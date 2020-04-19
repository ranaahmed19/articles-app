import React, { Component } from "react";
import { fetchArticle, editArticle } from "actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ARTICLES_PAGE_URL } from "constants.js";
import ArticleForm from "Components/Articles/ArticleForm";

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: (this.props.article && this.props.article.title) || "",
        body: (this.props.article && this.props.article.body) || "",
      },
      error: {
        title: "",
        body: "",
      },
    };
  }
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  saveArticle = () => {
    if (this.validateForm()) {
      let article = this.props.article;
      article.title = this.state.article.title;
      article.body = this.state.article.body;
      this.props.editArticle(article);
      this.props.history.push(ARTICLES_PAGE_URL);
    }
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
        header="Edit Article"
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
  fetchArticle,
  editArticle,
})(withRouter(EditArticle));
