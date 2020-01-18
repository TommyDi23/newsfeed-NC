import React, { Component } from "react";
import { addCommentToArticle } from "../api";

class CommentAdder extends Component {
  state = {
    body: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ body: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { article_id, username, postNewComment } = this.props;
    addCommentToArticle(article_id, { username, body }).then(
      newlyPostedComment => {
        postNewComment(newlyPostedComment);
        this.setState({ body: "" });
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          placeholder="have your say..."
          required
          onChange={this.handleChange}
          value={this.state.body}
          type="text"
          rows="5"
          cols="100"
        ></textarea>
        <button className='postButton'><span role='img' aria-label='postIt' >📨</span></button>
      </form>
    );
  }
}

export default CommentAdder;
