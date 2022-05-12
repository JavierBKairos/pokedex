const BASE_PATH = 'https://pokeapi.co/api/v2';

export const getPokemonDetail = async pokemonName => {
  const response = await fetch(`${BASE_PATH}/pokemon/${pokemonName}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const getPokemonList = async pokemonName => {
  const response = await fetch(`${BASE_PATH}/pokemon?limit=10&offset=0`);
  const jsonResponse = await response.json();
  return jsonResponse;
};
