import React from "react";
import GuessedLetter from "./GuessedLetter";
import uuid from "uuid/v4";

function Guesses({ guesses }) {
  return (
    <div>
      <h2>
        Guesses:{" "}
        {guesses.map(({ letter, isLetterSuccessful }) => (
          <GuessedLetter
            letter={letter}
            isLetterSuccessful={isLetterSuccessful}
            key={uuid()}
          />
        ))}
      </h2>
    </div>
  );
}

export default Guesses;
