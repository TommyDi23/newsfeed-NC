import React, { Component } from "react";
import {  changeVotes } from "../api";
import ErrorDisplay from "./ErrorDisplay";

class VoteUpdater extends Component {
  state = {
    voteDifference: 0,
    isLoading: true,
    err: null
  };

  handleVote = inc_votes => {
    const { id, path } = this.props;
    this.setState(currentState => {
      return { voteDifference: currentState.voteDifference + inc_votes };
    });

    changeVotes(path, id, inc_votes).catch(({ response }) =>
      this.setState(currentState => {
        return {
          err: { status: response.status, msg: response.data.msg },
          isLoading: false,
          voteDifference: currentState.voteDifference - inc_votes
        };
      })
    );


  };

  render() {
    const { voteDifference, err } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <p>Votes / {votes + voteDifference}</p>

        <p>{err && <ErrorDisplay err={err} />}</p>

        <button className="upvote"
          disabled={voteDifference === 1}
          onClick={() => this.handleVote(+1)}
        >
          <span role='img' aria-label='postIt' >⬆</span>
        </button>
        <button className="downvote"
          disabled={voteDifference === -1}
          onClick={() => this.handleVote(-1)}
        >
          <span role='img' aria-label='postIt' >⬇</span>
        </button>
      </div>
    );
  }
}

export default VoteUpdater;
