import React from "react";
import VoteUpdater from "./VoteUpdater";

const CommentCard = props => {
  const { comment, handleDelete, username } = props;
  
  return (
    <>
      <li>
        <h6>
          {comment.author} / {comment.created_at}
        </h6>
        <p>{comment.body}</p>
        {comment.author === username && (
          <button onClick={() => handleDelete(comment.comment_id)}>
            delete
          </button>
        )}
        <VoteUpdater id={comment.comment_id} votes={comment.votes} path='comments' />
      </li>
    </>
  );
};

export default CommentCard;
