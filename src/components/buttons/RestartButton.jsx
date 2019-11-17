import React from "react";

function RestartButton({ onRestart }) {
  return (
    <button
      onClick={() => {
        onRestart();
      }}
    >
      Restart
    </button>
  );
}

RestartButton.defaultProps = {
  onRestart: () => {}
};

export default RestartButton;
