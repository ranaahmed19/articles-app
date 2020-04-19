import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "actions";
import LoginForm from "Components/Login/LoginForm";
import { Page, Header } from "tabler-react";
import { withRouter } from "react-router-dom";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        token: "",
      },
      error: {
        username: "",
        password: "",
      },
    };
  }
  handleLogin = () => {
    console.log("login", this.state.user);
    if (this.validateForm()) {
      const user = this.state.user;
      user["token"] = "newToken";
      this.setState({ user });
      this.props.login(this.state.user);
      this.redirectToHome();
    }
  };
  redirectToHome() {
    this.props.history.push("/");
  }
  validateForm() {
    const user = this.state.user;
    if (user.username === "" || user.password === "") {
      const error = {};
      if (user.username === "") error.username = "This Field is required";
      else error.password = "This Field is required";
      this.setState({ error });
      return false;
    }
    return true;
  }
  handleFieldChange = (target) => {
    const user = this.state.user;
    user[target.name] = target.value;
    this.setState({ user });
  };
  render() {
    return (
      <Page>
        <Page.Card>
          <Header.H1>Login</Header.H1>
          <LoginForm
            user={this.state.user}
            handleLoginButton={this.handleLogin}
            onChangeField={this.handleFieldChange}
            error={this.state.error}
          />
        </Page.Card>
      </Page>
    );
  }
}
function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
  };
}

export default connect(mapStateToProps, { login })(withRouter(LoginPage));
