import React, { Component } from "react";
import { fetchArticle, editArticle } from "actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ARTICLES_PAGE_URL } from "constants.js";
import ArticleForm from "Components/Articles/ArticleForm";

class EditArticle extends Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  saveArticle = (article) => {
    let updatedArticle = this.props.article;
    updatedArticle.title = article.title;
    updatedArticle.body = article.body;
    this.props.editArticle(updatedArticle);
    this.props.history.push(ARTICLES_PAGE_URL);
  };

  render() {
    return (
      <ArticleForm
        article={this.props.article}
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
