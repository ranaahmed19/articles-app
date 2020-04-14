import React from "react";
import { BlogCard } from "tabler-react";

function ArticlesList({ articles, handleOnClick }) {
  return articles.map((article) => (
    <div onClick={() => handleOnClick(article.id)} key={article.id}>
      <BlogCard
        title={article.title}
        authorName={article.author}
        date={article.created_at}
        avatarImgSrc="https://tabler.github.io/tabler/demo/faces/male/17.jpg"
      />
    </div>
  ));
}

export default ArticlesList;
