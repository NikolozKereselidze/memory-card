import "../styles/Game.css";
import Card from "./Card";
import { useState } from "react";
import GameOver from "./GameOver";

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [pokeNames, setPokeNames] = useState([
    "ditto",
    "charmander",
    "charmeleon",
    "aerodactyl",
    "snorlax",
    "vulpix",
    "magnemite",
    "geodude",
    "lapras",
    "mudkip",
  ]);

  const shuffle = (arr) => {
    let shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };

  const toggleModal = () => {
    document.querySelector(".score-wrapper").classList.toggle("disabled");
    document.querySelector(".card-wrapper").classList.toggle("disabled");
  };

  const onClick = (name) => {
    if (clicked.includes(name)) {
      setHighScore((prev) => (score > highScore ? score : prev));
      setGameOver(true);
      toggleModal();
      return;
    }
    setClicked([...clicked, name]);
    setScore((prevScore) => prevScore + 1);
    let shuffled = shuffle(pokeNames);
    setPokeNames(shuffled);
  };

  const restart = () => {
    setScore(0);
    setClicked([]);
    setGameOver(false);
    let shuffled = shuffle(pokeNames);
    setPokeNames(shuffled);
    toggleModal();
  };

  return (
    <main>
      <div className="score-wrapper">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>

      <div className="card-wrapper">
        {pokeNames?.map((poke) => (
          <Card key={poke} poke={poke} onClick={onClick}></Card>
        ))}
      </div>
      {gameOver && (
        <GameOver score={score} highScore={highScore} restart={restart} />
      )}
    </main>
  );
}

export default Game;
