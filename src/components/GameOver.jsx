/* eslint-disable react/prop-types */
import "../styles/GameOver.css";
import sadPikachu from "../assets/sad-pikachu.gif";

function GameOver({ score, highScore, restart }) {
  return (
    <div className="end-game-modal">
      <h2>Game Over</h2>
      <img src={sadPikachu} />

      <h3>Your score: {score}</h3>
      <h3>High Score: {highScore}</h3>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default GameOver;
