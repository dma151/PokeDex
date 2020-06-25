import React, { useEffect, useState } from "react";

function PokemonCard(props) {
  console.log(props.URL);
    const [singlePokemon, setSinglePokemon] = useState({})
  const getSinglePokemon = () => {
    fetch(props.URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePokemon(data)
      });
  };

  useEffect(() => {
      console.log('useEffect')
    getSinglePokemon();
  }, [props]);

  let pokemon = ''
  if(singlePokemon.sprites) {
    pokemon = <> <img src={singlePokemon.sprites.front_default} />
    <p>{singlePokemon.name}</p></>
  }
  return (
    <div className="App">
     {pokemon}
    </div>
  );
}

export default PokemonCard;
