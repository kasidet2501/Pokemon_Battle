import axios from "axios";

async function fetchPokemon(pokeName) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );

    return response?.data;
  } catch (error) {
    Promise.reject();
  }
}

export default fetchPokemon;
