import React from "react";
import { Link } from "@reach/router";
import UserLogin from "./UserLogin";

const Header = props => {
  return (
    <header>
      <Link to={"/"}>
        <h1><span role='img' aria-label='home'>🏠</span></h1>
      </Link>
      <h2 className="title">newsFeed</h2>
      <p id="user">~welcome {props.username}~</p>
      <UserLogin selectUser={props.selectUser} />
    </header>
  );
};

export default Header;
