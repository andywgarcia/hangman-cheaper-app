import React from "react";

function TotalGuesses({ numGuesses, maxGuesses }) {
  return (
    <div>
      <h1>
        Total Guesses: {numGuesses}/{maxGuesses}
      </h1>
    </div>
  );
}

export default TotalGuesses;
