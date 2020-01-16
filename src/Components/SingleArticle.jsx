import React, { Component } from "react";
import { getArticlesById } from "../api";
import Loading from "./Loading";
import ArticleComments from "./ArticleComments";
import ErrorDisplay from "./ErrorDisplay";
import VoteUpdater from "./VoteUpdater";

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchSingleArticle(article_id);
  }

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    getArticlesById(article_id)
      .then(article => this.setState({ article: article, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        })
      );
  };

  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    const { isLoading, err } = this.state;
    const { article_id, username } = this.props;
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <main>
        <h4>{title}</h4>
        <p className='articleBody'>{body}</p>
        <p>
          Written by/ {author} on {created_at} / {comment_count} comments/{" "}
          {topic}{" "}
        </p>
        <VoteUpdater id={article_id} votes={votes} path='articles' />
        <ArticleComments article_id={article_id} username={username} />
      </main>
    );
  }
}

export default SingleArticle;
