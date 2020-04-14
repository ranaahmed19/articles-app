import React, { Component } from "react";
import { connect } from "react-redux";
import { Page, Header, Grid, Profile } from "tabler-react";
import { fetchArticle } from "./../../actions";

class ArticleDetails extends Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <Page>
        {Object.keys(this.props.article).length === 0 ? (
          <Page.Card>
            <Header.H1>Article Not Found</Header.H1>
          </Page.Card>
        ) : (
          <Page.Content>
            <Grid>
              <Grid.Row>
                <Grid.Col lg="3">
                  <Page.Card>
                    <Grid>
                      <Grid.Row cards alignItems="center">
                        <Grid.Col alignItems="center">
                          <Profile.Image
                            size="l"
                            avatarURL="https://tabler.github.io/tabler/demo/faces/male/17.jpg"
                          />
                        </Grid.Col>
                      </Grid.Row>
                      <Grid.Row className="profile-row">
                        <Grid.Col>
                          <Header.H3>{this.props.article.author}</Header.H3>
                        </Grid.Col>
                      </Grid.Row>
                    </Grid>
                  </Page.Card>
                </Grid.Col>
                <Grid.Col>
                  <Page.Card>
                    <Header.H1>{this.props.article.title}</Header.H1>
                    <br />
                    {this.props.article.body}
                  </Page.Card>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Page.Content>
        )}
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}
export default connect(mapStateToProps, { fetchArticle })(ArticleDetails);
