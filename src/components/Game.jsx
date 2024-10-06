import Card from "./Card";
import { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
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

  const onClick = (name) => {
    if (clicked.includes(name)) return;
    setClicked([...clicked, name]);
    setScore((prevScore) => prevScore + 1);
    let shuffled = shuffle(pokeNames);
    setPokeNames(shuffled);
  };

  return (
    <div className="gela">
      {pokeNames?.map((poke) => (
        <Card key={poke} poke={poke} onClick={onClick}></Card>
      ))}
    </div>
  );
}

export default Game;
