import React from "react";
import { BlogCard } from "tabler-react";
import Moment from "moment";

function ArticlesList({ articles, handleOnClick }) {
  return articles.map((article) => (
    <div onClick={() => handleOnClick(article.id)} key={article.id}>
      <BlogCard
        title={article.title}
        authorName={article.author.name}
        date={Moment(article.created_at).format("YYYY-MM-DD")}
        avatarImgSrc="https://tabler.github.io/tabler/demo/faces/male/17.jpg"
      />
    </div>
  ));
}

export default ArticlesList;
