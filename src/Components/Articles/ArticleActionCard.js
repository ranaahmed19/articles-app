import React from "react";
import { Page, Grid, Button } from "tabler-react";
import { LOGGEDIN_USER_USERNAME } from "./../../constants";

export default function ArticleActionCard({ author, created_at }) {
  return (
    <Page.Card>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <strong>Created at</strong> {created_at}
          </Grid.Col>
        </Grid.Row>
        <ActionButtons author={author} />
      </Grid>
    </Page.Card>
  );
}

function ActionButtons({ author }) {
  const loggedInUser = localStorage.getItem(LOGGEDIN_USER_USERNAME) || "";
  return loggedInUser === author ? (
    <>
      <br />
      <Grid.Row>
        <Grid.Col>
          <Button.List>
            <Button>Edit</Button>
            <Button color="red">Delete</Button>
          </Button.List>
        </Grid.Col>
      </Grid.Row>
    </>
  ) : (
    ""
  );
}
