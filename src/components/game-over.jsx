import PropTypes from "prop-types";

const GameOver = ({ gameIsOver, wordOfTheDay }) => {
  return (
    <div className="game_over">
      {gameIsOver.won ? "You won!" : (
        <div className="app">
          You lost. The word of the day was:
          <div className="word_of_the_day">
            {wordOfTheDay}
          </div>
        </div>
      )}
    </div>
  );
};

GameOver.propTypes = {
  gameIsOver: PropTypes.object.isRequired,
  wordOfTheDay: PropTypes.string.isRequired,
};

export default GameOver;
