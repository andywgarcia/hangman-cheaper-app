import React from "react";

function PossibleWords({ possibleWords }) {
  if (possibleWords.length > 0) {
    return (
      <div>
        <h4>Possible Words ({possibleWords.length}): </h4>
        <h3>{possibleWords.join(", ")}</h3>
      </div>
    );
  }
  return <div />;
}

PossibleWords.defaultProps = {
  possibleWords: []
};

export default PossibleWords;
