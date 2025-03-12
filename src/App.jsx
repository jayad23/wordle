import { useEffect, useState } from "react";
import { MAX_TILES } from "./components/board";
import { Title } from "./components/title";
import Loading from "./components/loading";
import { fakeWordleAPI, handleKeyEvaluator } from "./utils";
import BoardContainer from "./components/board-container";
import GameOver from "./components/game-over";
import Instructions from "./components/instructions";

const App = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [gameIsOver, setGameIsOver] = useState({ over: false, won: false });

  const onFetchWords = async () => {
    const words = await fakeWordleAPI();
    const randomIndex = Math.floor(Math.random() * words.length);
    setWordOfTheDay(words[randomIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (handleKeyEvaluator(event.key)) return;
      if (!isNaN(event.key)) return;
      if (event.key === "Enter") {
        if (currentGuess.length < MAX_TILES) return;
        const guessesUpdated = [...guesses];
        const currentIndex = guesses.findIndex(item => item === null);
        guessesUpdated[currentIndex] = currentGuess;
        setGuesses(guessesUpdated);
        setCurrentGuess("");
        setButtonDisabled(false);

        if (currentIndex === MAX_TILES) {
          setGameIsOver({ over: true, won: false });
        } else if (currentGuess === wordOfTheDay) {
          setGameIsOver({ over: true, won: true });
        }

        return;
      }
      if (event.key === "Backspace") {
        setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
        return;
      }
      if (currentGuess.length < MAX_TILES) {
        setCurrentGuess(prevGuess => prevGuess + event.key);
        return;
      }

    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGuess]);

  const handleStartOver = (event) => {
    event.preventDefault();
    setGuesses(Array(6).fill(null));
    setCurrentGuess("");
    setWordOfTheDay("");
    setButtonDisabled(true);
    setGameIsOver({ over: false, won: false });
    onFetchWords();
  };

  useEffect(() => {
    onFetchWords();
  }, []);

  return (
    <div className="app">
      <div className="title_container">
        <Title />
        {
          gameIsOver.over && (
            <button disabled={buttonDisabled} type="button" onClick={handleStartOver}>
              Start Over
            </button>
          )
        }
      </div>
      {
        wordOfTheDay ? (
          <BoardContainer guesses={guesses} wordOfTheDay={wordOfTheDay} currentGuess={currentGuess} />
        ) : (
          <Loading />
        )
      }
      {
        gameIsOver.over && (
          <GameOver gameIsOver={gameIsOver} wordOfTheDay={wordOfTheDay} />
        )
      }
      <Instructions />
    </div>
  );
};

export default App;
