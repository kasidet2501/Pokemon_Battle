import { React, useEffect, useState } from "react";
import fetchPokeName from "../api/fetchPokeName";
import fetchPokemon from "../api/fetchPokemon";
import Detail from "./Detail";

function PokeDetail() {
  const [pokeName, setPokeName] = useState(undefined);
  const [pokedex, setPokedex] = useState(undefined);
  const [pokeskill, setPokeskill] = useState(undefined);
  //   setPokedex(pokeName);
  useEffect(() => {
    setPokeName(pokeName);
    fetchData();
    return () => {};
    // console.log(pokeName);
  }, []);

  const fetchData = async () => {
    let pokemonData = await fetchPokeName();
    if (pokemonData != undefined) {
      setPokeName({
        results: pokemonData?.results,
      });
    }
  };

  async function fetchPokeData(pokeName) {
    let pokemonData = await fetchPokemon(pokeName);
    console.log(pokemonData);
    if (pokemonData != undefined) {
      setPokeskill(pokemonData?.abilities);
      setPokedex({
        name: pokemonData?.name,
        height: pokemonData?.height,
        hp: pokemonData?.stats[0]?.base_stat,
        image: pokemonData?.sprites.other.showdown.back_default,
      });
      console.log(pokemonData?.abilities);
    }
  }

  const handleChange = (e) => {
    fetchPokeData(e.target.value);
  };

  const onChangeSkill = (e) => {
    alert(`Release power: ${e.target.textContent}`);
  };

  return (
    <>
      <div className="con-poke">
        {pokedex?.image ? (
          <div className="con-img">
            <img src={pokedex?.image} alt="" width="500" height="400" />
          </div>
        ) : (
          <div className="con-img">
            <div className="img-quest">
              <img
                src="./src/assets/preview.png"
                alt=""
                width="200"
                height="200"
              />
            </div>
          </div>
        )}

        <div className="con-select">
          <select
            className="select select-primary w-full max-w-xs"
            style={{ backgroundColor: "white" }}
            // className="select select-primary w-full max-w-xs"
            // value={name}
            onChange={handleChange}
          >
            <option defaultValue={""} selected disabled>
              Select your Pokemon
            </option>
            {pokeName?.results?.map((poke, key) => (
              <option key={key} value={poke.name}>
                {poke.name}
              </option>
            ))}
          </select>
        </div>
        {pokeskill ? (
          <div className="skill">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1"
                style={{ backgroundColor: "white", color: "black" }}
              >
                Skill
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {pokeskill?.map((poke, key) => (
                  <li>
                    <a key={key} onClick={onChangeSkill}>
                      {poke.ability.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="space-text">
          {pokedex ? (
            <Detail data={pokedex.name} hp={pokedex.hp} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default PokeDetail;
