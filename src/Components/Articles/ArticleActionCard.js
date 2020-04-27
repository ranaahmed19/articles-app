import React from "react";
import { Page, Grid, Button } from "tabler-react";
import { LOGGEDIN_USER_USERNAME } from "constants.js";
import Moment from "moment";

export default function ArticleActionCard({
  author,
  created_at,
  deleteArticle,
  editArticle,
}) {
  return (
    <Page.Card>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <strong>Created at</strong>{" "}
            {Moment(created_at).format("YYYY-MM-DD")}
          </Grid.Col>
        </Grid.Row>
        <ActionButtons
          author={author}
          editArticle={editArticle}
          deleteArticle={deleteArticle}
        />
      </Grid>
    </Page.Card>
  );
}

function ActionButtons({ author, deleteArticle, editArticle }) {
  const loggedInUser = localStorage.getItem(LOGGEDIN_USER_USERNAME) || "";
  return loggedInUser === author ? (
    <>
      <br />
      <Grid.Row>
        <Grid.Col>
          <Button.List>
            <Button onClick={editArticle}>Edit</Button>
            <Button onClick={deleteArticle} color="red">
              Delete
            </Button>
          </Button.List>
        </Grid.Col>
      </Grid.Row>
    </>
  ) : (
    ""
  );
}
