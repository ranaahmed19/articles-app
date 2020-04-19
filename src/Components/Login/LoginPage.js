import React from "react";
import LoginForm from "Components/Login/LoginForm";
import { Page, Header } from "tabler-react";
import { SIGNUP_URL } from "constants.js";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Page>
      <Page.Card>
        <Header.H1>Login</Header.H1>
        <LoginForm />
        <br />
        <Link to={SIGNUP_URL}>First time ? Click here to sign up</Link>
      </Page.Card>
    </Page>
  );
}
