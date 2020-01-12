import React, { Component } from "react";
import { getTopics } from "../api";

class NavBar extends Component {
  state = {
    topics: []
  };

componentDidMount(){
  this.fetchTopics()
}

  fetchTopics = () => {
    getTopics().then(data => this.setState({topics: data}));
  };

  render() {
  
    return <nav>
<ul>
<li>
  
</li>

</ul>

    </nav>;
  }
}

export default NavBar;
