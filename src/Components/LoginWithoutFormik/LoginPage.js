import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "./../../actions";
import LoginForm from "./LoginForm";
import { Page, Header } from "tabler-react";
import { withRouter } from "react-router-dom";

function LoginPage({ history: { push }, login }) {
  const userInitialState = {
    username: "",
    password: "",
    token: "",
  };
  const errorInitialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(userInitialState);
  const [error, setError] = useState(errorInitialState);

  const handleLogin = () => {
    if (validateForm()) {
      setUser((prevState) => {
        return { ...prevState, token: "newToken" };
      });
      login(user);
      redirectToHome();
      console.log(user);
    }
  };
  const redirectToHome = () => {
    push("/");
  };
  const validateForm = () => {
    if (user.username === "" || user.password === "") {
      const error = {};
      if (user.username === "") error.username = "This Field is required";
      if (user.password === "") error.password = "This Field is required";
      setError(error);
      return false;
    }
    return true;
  };
  const handleFieldChange = (target) => {
    const fieldvalue = target.value;
    setUser((prevState) => {
      return { ...prevState, [target.name]: fieldvalue };
    });
  };

  return (
    <Page>
      <Page.Card>
        <Header.H1>Login</Header.H1>
        <LoginForm
          user={user}
          handleLoginButton={handleLogin}
          onChangeField={handleFieldChange}
          error={error}
        />
      </Page.Card>
    </Page>
  );
}
export default connect(null, { login })(withRouter(LoginPage));
