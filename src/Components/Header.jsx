import React from "react";
import { Link } from "@reach/router";
import UserLogin from "./UserLogin";

const Header = props => {
  return (
    <header>
      <Link to={"/"}>
        <h1 className='home'><span role='img' aria-label='home' >🏠</span></h1>
      </Link>
      <h2 className="title">newsFeed/NC</h2>
      <p className="user">~welcome/{props.username}~</p>
      <UserLogin  selectUser={props.selectUser} />
    </header>
  );
};

export default Header;
