import axios from "axios";

export default {
  GenerateInitialWord: async () => {
    const response = await axios.post(
      "http://localhost:3001/generateInitialWord",
      {}
    );
    console.log(response);
    if (response.status !== 200) {
      alert("Cannot connect to the local server on port 3001");
      return null;
    }
    return response.data;
  },

  CheckGuess: async (
    currentHangmentString,
    guessedLetter,
    answer,
    alreadyGuessedLetters,
    possibleWords = []
  ) => {
    const response = await axios.post("http://localhost:3001/checkLetter", {
      hangmanString: currentHangmentString,
      guessedLetter: guessedLetter,
      answer: answer,
      excludedLetters: alreadyGuessedLetters,
      words: possibleWords.length > 0 ? possibleWords : null
    });
    console.log(response);
    if (response.status !== 200) {
      alert("Cannot connect to the local server on port 3001");
      return null;
    }
    return response.data;
  }
};
