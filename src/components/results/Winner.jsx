import React from "react";

function Winner({ turnsTaken, winningWord, onRestart }) {
  return (
    <div>
      <h1>You Won in {turnsTaken} turns!</h1>
      <h2>Winning Word: {winningWord}</h2>
      <button onClick={onRestart}>Reset</button>
    </div>
  );
}

Winner.defaultProps = {
  onRestart: () => {}
};
export default Winner;
