import React from "react";

function ActualAnswer({ turnsTaken, winningWord }) {
  return (
    <div>
      <h1>You Won in {turnsTaken} turns!</h1>
      <h2>Winning Word: {winningWord}</h2>
    </div>
  );
}

export default ActualAnswer;
