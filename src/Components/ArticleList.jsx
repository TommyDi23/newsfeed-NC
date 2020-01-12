import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    getArticles().then(data => {
      this.setState({ articles: data });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return (
              <ArticleCard key={article.article_id} article={article} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
