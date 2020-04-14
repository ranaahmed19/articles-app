import React, { Component } from "react";
import { connect } from "react-redux";
import { Page, Header } from "tabler-react";
import { fetchArticle } from "./../../actions";

class ArticleDetails extends Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <Page>
        <Page.Card>
          <Header.H1>{this.props.article.title}</Header.H1>
        </Page.Card>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}
export default connect(mapStateToProps, { fetchArticle })(ArticleDetails);
