import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hangman from "./components/Hangman";
class App extends Component {
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
