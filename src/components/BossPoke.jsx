import { React, useEffect, useState } from "react";
import fetchPokemon from "../api/fetchPokemon";

function BossPoke() {
  const [pokedex, setPokedex] = useState(undefined);

  useEffect(() => {
    fetchPokeData("garchomp");
    return () => {};
  }, []);

  async function fetchPokeData(pokeName) {
    let pokemonData = await fetchPokemon(pokeName);
    console.log(pokemonData);
    if (pokemonData != undefined) {
      setPokedex({
        name: pokemonData?.name,
        height: pokemonData?.height,
        hp: pokemonData?.stats[0]?.base_stat,
        // image: pokemonData?.sprites.other.home.front_default,
        image: pokemonData?.sprites.other.showdown.front_default,
      });
    }
  }

  return (
    <>
      <div className="con-boss">
        {pokedex?.image ? (
          <div className="con-img-boss">
            <img src={pokedex?.image} alt="" width="500" height="400" />
          </div>
        ) : (
          <div className="con-img-boss">
            {/* <img src={pokedex?.image} alt="" width="200" height="150" /> */}
          </div>
        )}
      </div>
    </>
  );
}

export default BossPoke;
