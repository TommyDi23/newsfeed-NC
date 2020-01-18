import React from "react";

const ArticleSorter = props => {
  return (
    <>
      <p className='orderarticles'>order of articles:</p>
      <select onChange={e => props.articlesSortBy(e.target.value, "sort_by")}>
        <option value="created_at">Date created</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <form onClick={e => props.articlesSortBy(e.target.value, "order")}>
        <label>
          <input type="radio" name="order" value="desc" id='dc' /> descending
        </label>
        <label>
          <input type="radio" name="order" value="asc" id='ac'/> ascending
        </label>
      </form>
    </>
  );
};

export default ArticleSorter;
