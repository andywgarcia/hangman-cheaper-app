import React from "react";

function Winner({ winningWord, onReset }) {
  return (
    <div>
      <h1>You Lose. Answer was {winningWord}</h1>
      <button
        onClick={() => {
          onReset();
        }}
      >
        Restart
      </button>
    </div>
  );
}

Winner.defaultProps = {
  onReset: () => {}
};
export default Winner;
