import PropTypes from "prop-types";
import Board from "./board";

const BoardContainer = ({ guesses, wordOfTheDay, currentGuess }) => {
  return (
    <div className="board_container">
      {
        guesses.map((guess, index) => {
          const key = `${guess}-${index}`;
          const isCurrentIndex = index === guesses.findIndex(item => item === null);
          return (
            <Board
              key={key}
              wordOfTheDay={wordOfTheDay}
              isFinal={!isCurrentIndex && guess !== null}
              guess={isCurrentIndex ? currentGuess : guess ?? ""}
            />
          );
        })
      }
    </div>
  );
};

BoardContainer.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
  wordOfTheDay: PropTypes.string.isRequired,
  currentGuess: PropTypes.string.isRequired,
};

export default BoardContainer;
