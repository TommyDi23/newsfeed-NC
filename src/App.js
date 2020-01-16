import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import ErrorDisplay from "./Components/ErrorDisplay";
import SideBarTwo from "./Components/SideBarTwo";

//import { getUser } from "./api";

class App extends Component {
  state = {
    username: "jessjelly"
  };

  selectUser = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <Header username={username} selectUser={this.selectUser} />
        <NavBar />
        <SideBarTwo />
        <Router primary={false} className="main">
          <ArticlesList path="/topics/:topic/articles" username={username} />
          <ArticlesList path="/" username={username} />
          <SingleArticle path="/articles/:article_id" username={username} />
          <ErrorDisplay default err={{ status: 404, msg: "route not found" }} />
        </Router>
      </div>
    );
  }
}

export default App;
