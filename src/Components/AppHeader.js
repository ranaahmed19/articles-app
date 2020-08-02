import React from "react";
import { Button, Grid } from "tabler-react";
import { LOGGEDIN_USER_USERNAME, LOGIN_URL } from "constants.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "actions";

function AppHeader({ history: { push }, logout }) {
  const loggedinUser = localStorage.getItem(LOGGEDIN_USER_USERNAME) || "";
  const handleLogout = () => {
    logout();
    push(LOGIN_URL);
  };
  const signin = () => {
    push(LOGIN_URL);
  };
  return (
    <div className="page-main">
      <Grid>
        <Grid.Row className="header">
          <Grid.Col lg="5">
            <h1>Articles App</h1>
          </Grid.Col>
          <Grid.Col lg="5" />
          <Grid.Col lg="2">
            <Button.List>
              {loggedinUser !== "" ? (
                <Button onClick={handleLogout} icon="log-out" color="primary">
                  {"  "}
                  Log out
                </Button>
              ) : (
                <Button onClick={signin} icon="log-in" color="primary">
                  {"  "}
                  Sign in
                </Button>
              )}
            </Button.List>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default connect(null, { logout })(withRouter(AppHeader));
