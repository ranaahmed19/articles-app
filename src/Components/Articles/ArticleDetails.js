import { Component } from "react";
import { connect } from "react-redux";

class ArticleDetails extends Component {
  render() {
    return (
      <Page>
        <Page.Card>
          <Header.H1>{this.props.article}</Header.H1>
        </Page.Card>
      </Page>
    );
  }
}
export default connect()(ArticleDetails);
