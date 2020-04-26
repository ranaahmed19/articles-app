import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "actions";
import ArticlesList from "Components/Articles/ArticlesList";
import { Button, Page, Loader } from "tabler-react";
import { withRouter } from "react-router-dom";
import {
  ADD_ARTICLE_URL,
  ARTICLE_DETAILS_URL,
  LOGGEDIN_USER_USERNAME,
} from "constants.js";
import { generatePath } from "react-router";

class ArticlesPage extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  handleAddArticleButton = () => {
    this.props.history.push(ADD_ARTICLE_URL);
  };

  handleArticleOnClick = (id) => {
    const path = generatePath(ARTICLE_DETAILS_URL, { id });
    this.props.history.push(path);
  };

  render() {
    const loggedInUser = localStorage.getItem(LOGGEDIN_USER_USERNAME) || "";
    return (
      <Page>
        {loggedInUser !== "" ? (
          <Page.Header>
            <Button.List>
              <Button
                onClick={this.handleAddArticleButton}
                icon="plus"
                color="primary"
                outline
              >
                Add Article
              </Button>
            </Button.List>
          </Page.Header>
        ) : (
          ""
        )}
        <Page.Content>
          {this.props.articles && this.props.articles.length ? (
            <ArticlesList
              articles={this.props.articles}
              handleOnClick={this.handleArticleOnClick}
            ></ArticlesList>
          ) : (
            <Loader></Loader>
          )}
        </Page.Content>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}
export default connect(mapStateToProps, { fetchArticles })(
  withRouter(ArticlesPage)
);
