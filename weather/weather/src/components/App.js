import React, { Component } from "react";
import SearchBar from "../containers/searchBar";
import Display from "../containers/display";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <Display />
      </div>
    );
  }
}

export default App;
