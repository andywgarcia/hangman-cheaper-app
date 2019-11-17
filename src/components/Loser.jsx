import React from "react";
import RestartButton from "./buttons/RestartButton";

function Winner({ winningWord, onRestart }) {
  return (
    <div>
      <h1>You Lose. Answer was {winningWord}</h1>
      <RestartButton
        onRestart={() => {
          onRestart();
        }}
      />
    </div>
  );
}

Winner.defaultProps = {
  onRestart: () => {}
};
export default Winner;
