import React, { useState } from "react";

function GuessInput({ onGuess, alreadyGuessedCharacters }) {
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
      <h2>
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
          maxLength={1}
          placeholder="a"
        ></input>
        <button onClick={onSubmit}>Guess</button>
      </h2>
    </div>
  );
}

GuessInput.defaultProps = {
  onGuess: () => {},
  alreadyGuessedCharacters: []
};

export default GuessInput;
