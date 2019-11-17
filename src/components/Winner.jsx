import React from "react";

function Winner({ turnsTaken, winningWord, onReset }) {
  return (
    <div>
      <h1>You Won in {turnsTaken} turns!</h1>
      <h2>Winning Word: {winningWord}</h2>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

Winner.defaultProps = {
  onReset: () => {}
};
export default Winner;
