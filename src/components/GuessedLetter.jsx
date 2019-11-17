import React from "react";

const getLetterColor = isLetterSuccessful => {
  return isLetterSuccessful ? "green" : "red";
};

function GuessedLetter({ letter, isLetterSuccessful }) {
  return (
    <span style={{ color: getLetterColor(isLetterSuccessful) }}>{letter}</span>
  );
}

export default GuessedLetter;
