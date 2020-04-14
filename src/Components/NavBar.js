import React, { Component } from "react";
import { Nav, Page, Container } from "tabler-react";
import "tabler-react/dist/Tabler.css";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.homeTab = "HomePage";
    this.articlesTab = "ArticlesPage";
    const path = this.props.location.pathname;
    this.state = {
      selectedTab: path.includes("ArticlesPage")
        ? this.articlesTab
        : this.homeTab,
    };
  }

  checkActive = (tabName) => {
    if (tabName === this.state.selectedTab) return true;
    else return false;
  };
  changeTab = (tabName) => {
    this.setState({ selectedTab: tabName });
    this.props.history.push("/" + tabName);
  };
  render() {
    return (
      <Page>
        <Page.Header>
          <Container>
            <Nav>
              <Nav.Item
                active={this.checkActive(this.homeTab)}
                onClick={() => {
                  this.changeTab(this.homeTab);
                }}
                value="Home"
              />
              <Nav.Item
                active={this.checkActive(this.articlesTab)}
                onClick={() => {
                  this.changeTab(this.articlesTab);
                }}
                value="Articles"
              />
            </Nav>
          </Container>
        </Page.Header>
        <Page.Content>{this.props.children}</Page.Content>
      </Page>
    );
  }
}
export default withRouter(NavBar);
