import axios from "axios";

const hostname = "http://localhost:3001";

export default {
  GenerateInitialWord: async () => {
    const response = await axios.post(`${hostname}/generateInitialWord`, {});
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
    const response = await axios.post(`${hostname}/checkLetter`, {
      hangmanString: currentHangmentString,
      guessedLetter: guessedLetter,
      answer: answer,
      alreadyGuessedLetters: alreadyGuessedLetters,
      words: possibleWords.length > 0 ? possibleWords : null
    });
    if (response.status !== 200) {
      alert("Cannot connect to the local server on port 3001");
      return null;
    }
    return response.data;
  }
};
