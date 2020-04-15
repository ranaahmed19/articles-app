import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./../../actions";

class LoginForm extends Component {
  validationSchema = () => {
    return yup.object().shape({
      password: yup
        .string()
        .label("Password")
        .required()
        .min(2, "Seems a bit short...")
        .max(10, "We prefer insecure system, try a shorter password."),
      username: yup.string().required().label("username").min(5),
    });
  };

  onSubmit = (values, actions) => {
    this.props.login(values);
    this.props.history.push("/");
  };
  render() {
    return (
      <Formik
        initialValues={{
          password: "",
          username: "",
        }}
        onSubmit={this.onSubmit}
        validationSchema={this.validationSchema()}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
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
    );
  }
}

export default connect(null, { login })(withRouter(LoginForm));
