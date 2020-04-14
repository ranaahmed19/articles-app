import React, { Component } from "react";
import { connect } from "react-redux";
import { Page, Header, Grid } from "tabler-react";
import { fetchArticle, deleteArticle } from "./../../actions";
import AuthorCard from "./AuthorCard";
import ArticleActionCard from "./ArticleActionCard";
import { withRouter } from "react-router-dom";
import { ARTICLES_PAGE_URL } from "./../../constants";

class ArticleDetails extends Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  handleDeleteArticle = () => {
    const articleId = this.props.match.params.id;
    this.props.deleteArticle(articleId);
    this.props.history.push(ARTICLES_PAGE_URL);
  };

  handleEditArticle = () => {};

  render() {
    return (
      <Page>
        {Object.keys(this.props.article).length === 0 ? (
          <Page.Card>
            <Header.H1>Article Not Found</Header.H1>
          </Page.Card>
        ) : (
          <Page.Content>
            <Grid>
              <Grid.Row>
                <Grid.Col lg="3">
                  <AuthorCard name={this.props.article.author} />
                  <ArticleActionCard
                    author={this.props.article.author}
                    created_at={this.props.article.created_at}
                    editArticle={this.handleEditArticle}
                    deleteArticle={this.handleDeleteArticle}
                  />
                </Grid.Col>
                <Grid.Col>
                  <Page.Card>
                    <Header.H1>{this.props.article.title}</Header.H1>
                    <br />
                    {this.props.article.body}
                  </Page.Card>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Page.Content>
        )}
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}
export default connect(mapStateToProps, { fetchArticle, deleteArticle })(
  withRouter(ArticleDetails)
);
