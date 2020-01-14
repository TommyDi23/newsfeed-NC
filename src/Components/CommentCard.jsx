import React from "react";
import VoteUpdater from "./VoteUpdater";

const CommentCard = props => {
  const { comment, handleDelete, username } = props;
  
  return (
    <>
      <li>
        <h5>
          {comment.author} / {comment.created_at}
        </h5>
        <p>{comment.body}</p>
        {comment.author === username && (
          <button onClick={() => handleDelete(comment.comment_id)}>
            delete
          </button>
        )}
        <VoteUpdater comment_id={comment.comment_id} commentVotes={comment.votes} />
      </li>
    </>
  );
};

export default CommentCard;
