import React from "react";

function Guesses({ guesses }) {
  return (
    <div>
      <h2>Guesses: {guesses.join(" ")}</h2>
    </div>
  );
}

export default Guesses;
