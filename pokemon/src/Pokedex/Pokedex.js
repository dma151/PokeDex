import React, { useState, useEffect } from "react";

import PokemonCard from "../PokemonCard/PokemonCard";
function Pokedex() {
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [selectedURL, setSelectedURL] = useState("https://pokeapi.co/api/v2/pokemon/1/");

  const getAllPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setListOfPokemon(data.results);
        console.log(data.results);
      });
  };

  useEffect(() => {
    getAllPoke();
  }, []);

  const handleClick = (e) => {
    console.log(e.target);
    let singlePokemon = listOfPokemon.filter((poke) => {
      return poke.name === e.target.innerText;
    });

    console.log(singlePokemon[0].url);
    setSelectedURL(singlePokemon[0].url);
  };

  let displayPokemon = <h1>loading</h1>;
  if (listOfPokemon[0]) {
    displayPokemon = listOfPokemon.map((pokemon) => {
      return <p onClick={handleClick}>{pokemon.name}</p>;
    });
  }
  return (
    <div className="App">
      {displayPokemon}
      <PokemonCard URL={selectedURL}/>
    </div>
  );
}

export default Pokedex;
