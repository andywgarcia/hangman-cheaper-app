import React, { useState, useEffect } from "react";
import ActualAnswer from "./ActualAnswer";
import HangmanWord from "./HangmanWord";
import NextGuess from "./NextGuess";
import TotalGuesses from "./TotalGuesses";
import Guesses from "./Guesses";
import PossibleWords from "./PossibleWords";
import Winner from "./Winner";
import Loser from "./Loser";

import HangmanClient from "../util/hangmanClient";
import TestModeButton from "./buttons/TestModeButton";
import RestartButton from "./buttons/RestartButton";

const GenerateInitialHangmanWord = answer => {
  return answer.replace(/[a-z]/gi, "?");
};

const MAX_GUESSES = 10;

function Hangman() {
  const [hangmanWord, setHangmanWord] = useState(null);
  const [answer, setAnswer] = useState(null);
  const initializeWord = () => {
    HangmanClient.GenerateInitialWord().then(initialWord => {
      setAnswer(initialWord);
      setHangmanWord(GenerateInitialHangmanWord(initialWord));
    });
  };
  useEffect(() => {
    initializeWord();
  }, []);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [possibleWords, setPossibleWords] = useState([]);
  const submitGuess = async letter => {
    const result = await HangmanClient.CheckGuess(
      hangmanWord,
      letter,
      answer,
      guessedLetters.map(({ letter }) => letter),
      possibleWords
    );
    if (result.isLetterSuccessful) {
      setHangmanWord(result.hangmanString);
    } else {
      setAnswer(result.possibleWords[0]);
    }
    setPossibleWords(result.possibleWords);
    setGuessedLetters([
      ...guessedLetters,
      { letter, isLetterSuccessful: result.isLetterSuccessful }
    ]);
  };

  const [isTestMode, setIsTestMode] = useState(false);

  const restart = () => {
    initializeWord();
    setPossibleWords([]);
    setGuessedLetters([]);
  };

  if (hangmanWord === null || answer === null) {
    return <h1>Loading...</h1>;
  }

  if (hangmanWord !== null && answer !== null && hangmanWord === answer) {
    return (
      <Winner
        turnsTaken={guessedLetters.length}
        winningWord={answer}
        onRestart={restart}
      />
    );
  }
  if (guessedLetters.length >= MAX_GUESSES && !isTestMode) {
    return <Loser winningWord={answer} onRestart={restart} />;
  }

  return (
    <div>
      <HangmanWord word={hangmanWord}></HangmanWord>
      <Guesses
        guesses={guessedLetters}
        alreadyGuessedCharacters={guessedLetters}
      />
      <NextGuess
        onGuess={submitGuess}
        alreadyGuessedCharacters={guessedLetters}
      ></NextGuess>
      <TotalGuesses
        numGuesses={guessedLetters.length}
        maxGuesses={MAX_GUESSES}
      ></TotalGuesses>
      <TestModeButton
        onToggleTestMode={() => {
          setIsTestMode(!isTestMode);
        }}
      />
      <RestartButton
        onRestart={() => {
          restart();
        }}
      />
      {isTestMode && (
        <React.Fragment>
          <hr />
          <ActualAnswer word={answer}></ActualAnswer>
          <PossibleWords possibleWords={possibleWords} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Hangman;
