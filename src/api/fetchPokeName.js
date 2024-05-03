import axios from "axios";

async function fetchPokeName() {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=20`
    );
    return response?.data;
  } catch (error) {
    Promise.reject();
  }
}

export default fetchPokeName;
