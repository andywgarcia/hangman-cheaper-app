import React, { useState, useEffect } from "react";
import ActualAnswer from "./ActualAnswer";
import HangmanWord from "./HangmanWord";
import NextGuess from "./NextGuess";
import TotalGuesses from "./TotalGuesses";
import Guesses from "./Guesses";
import PossibleWords from "./PossibleWords";
import Winner from "./Winner";

import HangmanClient from "../util/hangmanClient";

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

  const reset = () => {
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
        onReset={reset}
      />
    );
  }
  if (guessedLetters.length >= MAX_GUESSES) {
    return (
      <div>
        <h1>You Lose. Answer was {answer}</h1>
        <button
          onClick={() => {
            reset();
          }}
        >
          Restart
        </button>
      </div>
    );
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
      <button
        onClick={() => {
          setIsTestMode(!isTestMode);
        }}
      >
        Toggle Test Mode
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Restart
      </button>
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
