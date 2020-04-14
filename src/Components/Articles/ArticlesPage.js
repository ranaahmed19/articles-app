import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions";
import ArticlesList from "./ArticlesList";
import { Button, Page } from "tabler-react";
import { withRouter } from "react-router-dom";
import { ADD_ARTICLE_URL } from "./../../constants";

class ArticlesPage extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  handleAddArticleButton = () => {
    this.props.history.push(ADD_ARTICLE_URL);
  };

  handleArticleOnClick(id) {
    console.log("clicked", id);
  }

  render() {
    return (
      <Page>
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

        <Page.Content>
          <ArticlesList
            articles={this.props.articles}
            handleOnClick={this.handleArticleOnClick}
          ></ArticlesList>
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
