import React, { Component } from "react";
import { Page, Header } from "tabler-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { signup } from "./../actions";
import { withRouter } from "react-router-dom";

class SignupPage extends Component {
  validationSchema = () => {
    return yup.object().shape({
      email: yup.string().label("Email").email().required(),
      password: yup
        .string()
        .label("Password")
        .required()
        .min(2, "Seems a bit short...")
        .max(10, "We prefer insecure system, try a shorter password."),
      username: yup.string().required().label("username").min(5),
      fullname: yup.string().required().label("fullname").min(5),
    });
  };
  onSubmit = (values, actions) => {
    this.props.signup(values);
    this.props.history.push("/");
  };
  render() {
    return (
      <Page>
        <Page.Card>
          <Header.H1>Sign Up</Header.H1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              fullname: "",
              username: "",
            }}
            onSubmit={this.onSubmit}
            validationSchema={this.validationSchema()}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <Field
                    name="fullname"
                    placeholder="Enter full name"
                    className={`form-control ${
                      touched.fullname && errors.fullname ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="fullname"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field
                    name="username"
                    placeholder="Enter username"
                    className={`form-control ${
                      touched.username && errors.username ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="username"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </Page.Card>
      </Page>
    );
  }
}

export default connect(null, { signup })(withRouter(SignupPage));
