const Instructions = () => {
  return (
    <div className="instructions-container">
      <h4>INSTRUCTIONS OF THE GAME</h4>

      <ol>
        <li>
          Just type in the word despite not seeing the cursor. The words will fill out sequently.
        </li>
        <li>
          To submit your word, press the Enter key. To delete before submission, press the Delete key.
        </li>
        <li>
          If you are not familiar with the game, remember this:
          <ul>
            <li>
              The word is 5 letters long.
            </li>
            <li className="distributed">
              This color <div className="wrong-choice" />
              <span>means <i style={{ fontWeight: "normal" }}>Your submission is incorrect</i></span>
            </li>
            <li className="distributed">
              This color <div className="wrong-place" />
              <span>means <i style={{ fontWeight: "normal" }}>The word contains that letter but in a different position</i></span>
            </li>
            <li className="distributed">
              This color <div className="right-place" />
              <span>means <i style={{ fontWeight: "normal" }}>Both the letter and the position are right</i></span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
