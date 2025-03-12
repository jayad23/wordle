import PropTypes from "prop-types";

export const MAX_TILES = 5;

const Board = ({ guess, wordOfTheDay, isFinal }) => {

  const tiles = [];

  for (let i = 0;i < MAX_TILES;i++) {
    const character = guess[i];
    let className = "tile";

    if (isFinal) {
      if (character === wordOfTheDay[i]) {
        className += " correct";
      } else if (wordOfTheDay.includes(character)) {
        className += " matched";
      } else {
        className += " incorrect";
      }
    }
    tiles.push(
      <div key={i} className={className}>
        {character}
      </div>
    );
  }


  return (
    <div className="board">
      {tiles}
    </div>
  );
};

Board.propTypes = {
  guess: PropTypes.string,
  wordOfTheDay: PropTypes.string,
  isFinal: PropTypes.bool,
};

export default Board;
