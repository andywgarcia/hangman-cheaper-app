import React, { useState } from "react";

function NextGuess({ onGuess, alreadyGuessedCharacters }) {
  const [guess, setGuess] = useState("");
  const onSubmit = () => {
    console.log("Input: ", guess);
    if (guess.length !== 1) {
      alert("Enter exactly 1 character");
      return;
    }
    if (alreadyGuessedCharacters.includes(guess)) {
      alert("You have already guessed that letter");
      return;
    }
    onGuess(guess);
  };

  return (
    <div>
      <h1>
        Next Guess:{" "}
        <input
          onChange={event => {
            console.log("Changed: ", event.target.value);
            setGuess(event.target.value);
          }}
        ></input>
        <button onClick={onSubmit}>Guess</button>
      </h1>
    </div>
  );
}

NextGuess.defaultProps = {
  onGuess: () => {},
  alreadyGuessedCharacters: []
};

export default NextGuess;
