import React from "react";

function HangmanLetter({ letter }) {
  return (
    <span style={{ textDecoration: "underline", margin: ".1em" }}>
      {letter}
    </span>
  );
}

export default HangmanLetter;
