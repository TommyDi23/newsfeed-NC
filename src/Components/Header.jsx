import React from "react";
import { Link } from "@reach/router";
import UserLogin from "./UserLogin";

const Header = props => {
  return (
    <header>
      <Link to={"/"}>
        <h1>NewsFeed NC</h1>
      </Link>
      <p id="user">[welcome {props.username}]</p>
      <UserLogin selectUser={props.selectUser} />
    </header>
  );
};

export default Header;
