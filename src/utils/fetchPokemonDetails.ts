/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonDetails } from "../types";

interface params { data: PokemonDetails | null; error: unknown; loading: boolean; }

const fetchPokemonDetails = async (pokemonName: string): Promise<params> => {
  if (!pokemonName) {
    
    return { data: null, error: new Error('Empty pokemon name'), loading: false }
  }

  try {
    const storedDetail = localStorage.getItem(pokemonName);
    if (storedDetail && storedDetail.length > 0) {
      const parsedData: PokemonDetails = JSON.parse(storedDetail);
      return { data: parsedData, error: null, loading: false }
    }
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon details.');
    }
    const data = await response.json();
    const spriteFront = data.sprites.front_default;
    const artworkFront = data.sprites.other['official-artwork'].front_default;
    const { name, id } = data;
    const health = data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat;
    const attack = data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat;
    const defense = data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat;

    const details = { name, id, health, attack, defense, spriteFront, artworkFront };
    localStorage.setItem(details.name, JSON.stringify(details));
    return { data: details, error: null, loading: false }
  } catch (error) {
    return { data: null, error: error, loading: false }
  }
};

export default fetchPokemonDetails;