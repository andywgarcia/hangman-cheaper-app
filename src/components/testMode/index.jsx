import React from "react";
import PossibleWords from "./PossibleWords";
import ActualAnswer from "./ActualAnswer";

function TestModeSection({ isShown, answer, possibleWords }) {
  if (isShown) {
    return (
      <div>
        <hr />
        <ActualAnswer word={answer}></ActualAnswer>
        <PossibleWords possibleWords={possibleWords} />
      </div>
    );
  }
  return <React.Fragment />;
}

export default TestModeSection;
