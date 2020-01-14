import React, { Component } from "react";
import { updateArticleVote, updateCommentVote } from "../api";
import ErrorDisplay from "./ErrorDisplay";

class VoteUpdater extends Component {
  state = {
    voteDifference: 0,
    isLoading: true,
    err: null
  };

  handleVote = inc_votes => {
    const { comment_id, article_id } = this.props;
    this.setState(currentState => {
      return { voteDifference: currentState.voteDifference + inc_votes };
    });
    updateArticleVote(inc_votes, article_id).catch(({ response }) =>
      this.setState({
        err: { status: response.status, msg: response.data.msg },
        isLoading: false
      })
    );
    updateCommentVote(comment_id, inc_votes).catch(({ response }) =>
      this.setState({
        err: { status: response.status, msg: response.data.msg },
        isLoading: false
      })
    );
  };

  render() {
    const { voteDifference, err } = this.state;
    // if (err) return <ErrorDisplay err={err} />;
    return (
      <div>
        {this.props.article_id && (
          <p>Votes / {this.props.articleVotes + voteDifference}</p>
        )}
        {this.props.comment_id && (
          <p>Votes / {this.props.commentVotes + voteDifference}</p>
        )}
        
        <button disabled={voteDifference === 1} onClick={() => this.handleVote(+1)}>Upvote</button>
        <button disabled={voteDifference === -1} onClick={() => this.handleVote(-1)}>Downvote</button>
      </div>
    );
  }
}

export default VoteUpdater;
