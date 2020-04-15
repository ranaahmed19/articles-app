import React from "react";
import LoginForm from "./LoginForm";
import { Page, Header } from "tabler-react";

export default function LoginPage() {
  return (
    <Page>
      <Page.Card>
        <Header.H1>Login</Header.H1>
        <LoginForm />
      </Page.Card>
    </Page>
  );
}
