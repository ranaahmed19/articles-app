import React, { Component } from "react";
import { Form, Button, Page, Card, Header } from "tabler-react";
import { addArticle } from "../../actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LOGGEDIN_USER_USERNAME, ARTICLES_PAGE_URL } from "./../../constants";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        body: "",
        author: "",
        created_at: "",
        id: 0,
      },
      error: {
        title: "",
        body: "",
      },
    };
  }
  saveArticle = () => {
    if (this.validateForm()) {
      const newArticle = this.state.article;
      const date = new Date();
      newArticle.author = localStorage.getItem(LOGGEDIN_USER_USERNAME);
      newArticle.created_at = "".concat(
        date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
      );
      this.props.addArticle(newArticle);
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
      <Page>
        <Page.Card>
          <Card.Header>
            {" "}
            <Header.H1>New Article</Header.H1>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.FieldSet>
                <Form.Input
                  label="Title"
                  placeholder="Title"
                  value={this.state.article.title}
                  name="title"
                  error={this.state.error.title}
                  onChange={this.handleOnChange}
                ></Form.Input>
                <Form.Textarea
                  label="Body"
                  placeholder="Body"
                  value={this.state.article.body}
                  name="body"
                  error={this.state.error.body}
                  onChange={this.handleOnChange}
                ></Form.Textarea>
              </Form.FieldSet>
              <Form.Footer>
                <Button type="button" onClick={this.saveArticle}>
                  Save
                </Button>
              </Form.Footer>
            </Form>
          </Card.Body>
        </Page.Card>
      </Page>
    );
  }
}
function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps, { addArticle })(withRouter(AddArticle));
