import React from "react";
import axios from "axios";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading } = this.state.isLoading;
    return { isLoading } ? <h1>true</h1> : <h1>false</h1>;
  }
}

export default Home;
