import React from "react";
import HangmanLetter from "./HangmanLetter";
import uuid from "uuid/v4";

function HangmanWord({ word }) {
  return (
    <div>
      <h1>
        {[...word].map(letter => (
          <HangmanLetter letter={letter} key={uuid()} />
        ))}
      </h1>
    </div>
  );
}

HangmanWord.defaultProps = {
  word: ""
};

export default HangmanWord;
