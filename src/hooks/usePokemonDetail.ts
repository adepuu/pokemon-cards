/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import fetchPokemonDetails from '../utils/fetchPokemonDetails';
import { PokemonDetails } from '../types';

const usePokemonDetails = (pokemonName: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await fetchPokemonDetails(pokemonName);
      if (error) setError(error);
      
      setLoading(false);
      setPokemonDetails(data);
    }

    fetchData();
  }, [pokemonName]);

  return { pokemonDetails, loading, error };
};

export default usePokemonDetails;
