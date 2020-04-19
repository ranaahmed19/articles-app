import React, { Component } from "react";
import { Page, Card, Header } from "tabler-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default class ArticleForm extends Component {
  componentWillUnmount() {}
  validationSchema = () => {
    return yup.object().shape({
      title: yup
        .string()
        .required()
        .label("title")
        .min(2, "Seems a bit short..."),
      body: yup
        .string()
        .required()
        .label("body")
        .min(20, "Seems a bit short..."),
    });
  };

  onSubmit = (values, actions) => {
    this.props.saveArticle(values);
  };
  render() {
    return (
      <Page>
        <Page.Card>
          <Card.Header>
            {" "}
            <Header.H1>{this.props.header}</Header.H1>
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={this.props.article}
              onSubmit={this.onSubmit}
              validationSchema={this.validationSchema()}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field
                      name="title"
                      placeholder="Enter title"
                      className={`form-control ${
                        touched.title && errors.title ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="title"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <Field
                      name="body"
                      placeholder="Enter body"
                      className={`form-control ${
                        touched.body && errors.body ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="body"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Save"}
                  </button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Page.Card>
      </Page>
    );
  }
}
