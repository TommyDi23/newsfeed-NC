import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header>
      <Link to={'/'}>
        <h1>NewsFeed NC</h1>
      </Link>
      <p id="user">welcome {props.username}</p>
    </header>
  );
};

export default Header;
