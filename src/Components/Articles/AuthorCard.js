import React from "react";
import { Page, Header, Grid, Profile } from "tabler-react";

function AuthorCard({ name }) {
  return (
    <Page.Card>
      <Grid>
        <Profile.Image
          size="l"
          avatarURL="https://tabler.github.io/tabler/demo/faces/male/17.jpg"
        />
        <Grid.Row className="profile-row">
          <Grid.Col>
            <Header.H3>{name}</Header.H3>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Page.Card>
  );
}

export default AuthorCard;
