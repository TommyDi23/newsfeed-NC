import React, { Component } from "react";
import { getTopics } from "../api";
import Topics from "./Topics";

class NavBar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(data => this.setState({ topics: data }));
  };

  render() {
    const { topics } = this.state;

    return (
      <nav>
        <ul>
          {topics.map(topic => {
            return <Topics key={topic.slug} topic={topic}/>;
          })}
        </ul>
      </nav>
    );
  }
  
}

export default NavBar;
