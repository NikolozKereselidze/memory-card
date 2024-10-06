/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Card({ poke, onClick }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [poke]);

  return (
    <div className="card">
      <button onClick={() => onClick(pokemon.name)}>
        <img
          className="w-full h-full object-cover"
          src={pokemon?.sprites.front_shiny}
          alt="profile-picture"
        />
      </button>
    </div>
  );
}

export default Card;
