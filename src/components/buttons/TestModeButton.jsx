import React from "react";

function TestModeButton({ onToggleTestMode }) {
  return (
    <button
      onClick={() => {
        onToggleTestMode();
      }}
    >
      Toggle Test Mode
    </button>
  );
}

export default TestModeButton;
