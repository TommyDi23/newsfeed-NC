import React from "react";

const ArticleSorter = props => {
  return (
    <>
      <select onChange={e => props.articlesSortBy(e.target.value, "sort_by")}>
        <option value="created_at">Date created</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <form onClick={e => props.articlesSortBy(e.target.value, "order")}>
        <p>order of articles:</p>
        <label>
          <input type="radio" name="order" value="desc"  /> descending
        </label>
        <label>
          <input type="radio" name="order" value="asc" /> ascending
        </label>
       
      </form>
    </>
  );
};

export default ArticleSorter;
