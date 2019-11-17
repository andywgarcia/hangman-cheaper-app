import React, { Component } from "react";
import "./App.css";

import Hangman from "./components";
class App extends Component {
  componentDidMount() {
    document.title = "Hangman";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Hangman</h1>
          <h2>by Andy Garcia</h2>
        </div>
        <Hangman></Hangman>
      </div>
    );
  }
}

export default App;
