import React, { Component } from "react";
import { Form, Button, Page, Card, Header } from "tabler-react";

export default class ArticleForm extends Component {
  render() {
    return (
      <Page>
        <Page.Card>
          <Card.Header>
            {" "}
            <Header.H1>{this.props.header}</Header.H1>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.FieldSet>
                <Form.Input
                  label="Title"
                  placeholder="Title"
                  value={this.props.article.title}
                  name="title"
                  error={this.props.error.title}
                  onChange={this.props.handleOnChange}
                ></Form.Input>
                <Form.Textarea
                  label="Body"
                  placeholder="Body"
                  value={this.props.article.body}
                  name="body"
                  error={this.props.error.body}
                  onChange={this.props.handleOnChange}
                ></Form.Textarea>
              </Form.FieldSet>
              <Form.Footer>
                <Button type="button" onClick={this.props.saveArticle}>
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
