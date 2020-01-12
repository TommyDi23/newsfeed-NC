import React from "react";

const ArticleCard = props => {
  const {article} = props
  return (
    <div>
      <li>
        <h3>{article.title}</h3>
        <p>Posted by /{article.author} on {article.created_at}</p>
        <p>{article.comment_count} comments/ {article.votes} votes</p>
      </li>
    </div>
  );
};

export default ArticleCard;
