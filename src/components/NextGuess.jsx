import React, { useState } from "react";

function NextGuess({ onGuess, alreadyGuessedCharacters }) {
  const [guess, setGuess] = useState("");
  const onSubmit = () => {
    if (guess.length !== 1) {
      alert("Enter exactly 1 character");
      return;
    }
    if (
      alreadyGuessedCharacters.filter(({ letter }) => guess === letter).length >
      0
    ) {
      alert("You have already guessed that letter");
      setGuess("");
      return;
    }
    onGuess(guess);
    setGuess("");
  };

  return (
    <div>
      <h1>
        Next Guess:{" "}
        <input
          onChange={event => {
            setGuess(event.target.value);
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              setGuess(event.target.value);
              onSubmit();
            }
          }}
          value={guess}
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
