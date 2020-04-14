import React, { Component } from "react";
import { Page, Header } from "tabler-react";

export default class HomePage extends Component {
  render() {
    return (
      <Page>
        <Page.Card>
          <Header.H1>Welcome</Header.H1>
        </Page.Card>
      </Page>
    );
  }
}
