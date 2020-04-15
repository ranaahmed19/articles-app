import React from "react";
import { Button, Grid } from "tabler-react";
import {
  LOGGEDIN_USER_USERNAME,
  LOGGEDIN_USER_TOKEN,
  LOGIN_URL,
} from "./../constants";
import { withRouter } from "react-router-dom";

function AppHeader({ history: { push } }) {
  const logout = () => {
    localStorage.setItem(LOGGEDIN_USER_USERNAME, "");
    localStorage.setItem(LOGGEDIN_USER_TOKEN, "");
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
              <Button onClick={logout} icon="log-out" color="primary">
                {"  "}
                Log out
              </Button>
            </Button.List>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default withRouter(AppHeader);
