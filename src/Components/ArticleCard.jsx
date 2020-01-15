import React from "react";
import {Link} from '@reach/router'

const ArticleCard = props => {
  const {article} = props
  return (
    <div>
      <li className='articlelist'>
        <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        </Link>
        <p>Posted by /{article.author} on {article.created_at}</p>
        <p>{article.comment_count} comments/ {article.votes} votes</p>
      </li>
    </div>
  );
};

export default ArticleCard;
