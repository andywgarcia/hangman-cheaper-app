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

function Hangman() {
  const [hangmanWord, setHangmanWord] = useState(null);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    HangmanClient.GenerateInitialWord().then(initialWord => {
      console.log("Initial Word: ", initialWord);
      setAnswer(initialWord);
      setHangmanWord(GenerateInitialHangmanWord(initialWord));
    });
  }, []);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [possibleWords, setPossibleWords] = useState([]);
  const submitGuess = async letter => {
    const result = await HangmanClient.CheckGuess(
      hangmanWord,
      letter,
      answer,
      guessedLetters,
      possibleWords
    );
    if (result.isLetterSuccessful) {
      alert("Correct!");
      setHangmanWord(result.hangmanString);
    } else {
      alert("Try again!");
      setAnswer(result.possibleWords[0]);
    }
    setPossibleWords(result.possibleWords);
    setGuessedLetters([...guessedLetters, letter]);
  };

  if (hangmanWord !== null && answer !== null && hangmanWord === answer) {
    return <Winner turnsTaken={guessedLetters.length} winningWord={answer} />;
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
      <TotalGuesses></TotalGuesses>
      <hr />
      <ActualAnswer word={answer}></ActualAnswer>
      <PossibleWords possibleWords={possibleWords} />
    </div>
  );
}

export default Hangman;
