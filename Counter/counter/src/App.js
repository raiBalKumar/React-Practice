import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";

import store from "./store";
import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Board />
          <Increase />
        </div>
      </Provider>
    );
  }
}

export default App;
