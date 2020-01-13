import React, { Component } from "react";
import { getCommentsByArticleId, deleteCommentByCommentId } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import ErrorDisplay from "./ErrorDisplay";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id)
      .then(comments => this.setState({ comments: comments, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        })
      );
  }

  postNewComment = newlyPostedComment => {
    this.setState(currentState => {
      return {
        comments: [newlyPostedComment, ...currentState.comments],
        isLoading: false
      };
    });
  };

  handleDelete = comment_id => {
    const { comments } = this.state;
    deleteCommentByCommentId(comment_id);
    const filteredComments = comments.filter(
      com => com.comment_id !== comment_id
    );
    this.setState({ comments: filteredComments, isLoading: false });
  };

  render() {
    const { isLoading, comments, err } = this.state;
    const { article_id, username } = this.props;
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <div>
        <CommentAdder
          postNewComment={this.postNewComment}
          username={username}
          article_id={article_id}
        />

        <h4>Previous comments...</h4>
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                handleDelete={this.handleDelete}
                username={username}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleComments;
