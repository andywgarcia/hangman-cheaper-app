import React from "react";

function TotalGuesses({ numGuesses, maxGuesses }) {
  return (
    <div>
      <h2>
        Total Guesses: {numGuesses}/{maxGuesses}
      </h2>
    </div>
  );
}

export default TotalGuesses;
