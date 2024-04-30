/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

interface PokemonDetails {
  name: string;
  id: number;
  health: number;
  attack: number;
  defense: number;
  spriteFront: string;
  artworkFront: string;
}

const usePokemonDetails = (pokemonName: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
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

        setPokemonDetails({ name, id, health, attack, defense, spriteFront, artworkFront });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  return { pokemonDetails, loading, error };
};

export default usePokemonDetails;
