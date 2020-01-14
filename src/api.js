import axios from "axios";

const baseURL = "https://heroku-nc-news.herokuapp.com/api";

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (sort_by, order, topic) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { sort_by: sort_by, order: order, topic: topic }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticlesById = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const addCommentToArticle = (article_id, requestBody) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, requestBody)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentByCommentId = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const updateArticleVote = (inc_votes, article_id) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data.comment;
    });
};

export const updateCommentVote = (comment_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/comments/${comment_id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getUser = () => {};
