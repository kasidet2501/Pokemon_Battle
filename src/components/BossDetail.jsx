import { React, useEffect, useState } from "react";
import fetchPokemon from "../api/fetchPokemon";

function BossDetail() {
  const [pokedex, setPokedex] = useState(undefined);

  useEffect(() => {
    // setPokeName(pokeName);
    fetchPokeData();
    return () => {};
    // console.log(pokeName);
  }, []);

  async function fetchPokeData(pokeName) {
    let pokemonData = await fetchPokemon("garchomp");
    console.log(pokemonData);
    if (pokemonData != undefined) {
      setPokedex({
        name: pokemonData?.name,
        height: pokemonData?.height,
        hp: pokemonData?.stats[0]?.base_stat,
        image: pokemonData?.sprites.other.showdown.back_default,
      });
    }
  }

  return (
    <>
      {pokedex ? (
        <>
          <div className="con-boss-detail">
            <div className="text-box2">
              <div className="name2">Enemy&nbsp;:&nbsp;{pokedex.name}</div>
              <div className="hp2">
                HP&nbsp;<div className="line-hp2">{pokedex.hp}</div>&nbsp;
                {pokedex.hp}/{pokedex.hp}
              </div>
            </div>
          </div>
          <div className="con-textPoke">
            <img src="./src/assets/pokemon.png" />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default BossDetail;
