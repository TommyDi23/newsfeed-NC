import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import ArticleSorter from "./ArticleSorter";
import ErrorDisplay from "./ErrorDisplay";

class ArticlesList extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: null,
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevsProps, prevsState) {
    if (
      prevsState.sort_by !== this.state.sort_by ||
      prevsState.order !== this.state.order ||
      prevsProps.topic !== this.props.topic
    )
      this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    getArticles(sort_by, order, topic)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false, err: null });
      })
      .catch(({ response }) =>
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        })
      );
  };

  articlesSortBy = (value, key) => {
    this.setState({ [key]: value });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    const { topic } = this.props;
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <main >
        <h5>{topic} articles</h5>
        <ArticleSorter className="sorter" articlesSortBy={this.articlesSortBy} />
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }
}

export default ArticlesList;
