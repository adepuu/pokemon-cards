/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import PokemonContext, { Pokemon, PokemonContextType } from "./PokemonContext";
import fetchPokemonDetails from "../utils/fetchPokemonDetails";

const LIST_LOCAL_STORAGE_NAME = "pokemonListStorage";

export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortByField, setSortByField] = useState<string>('hp');

  const MAX_FETCH_DATA = 10000;
  useEffect(() => {
    const fetchPokemonList = async () => {
      setLoading(true);
      try {
        setLoading(true);
        let filteredResults: Pokemon[];
        const storedDetail = localStorage.getItem(LIST_LOCAL_STORAGE_NAME);
        if (storedDetail && storedDetail.length > 0) {
          const parsedData: Pokemon[] = JSON.parse(storedDetail);
          filteredResults = parsedData;
        } else {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${searchQuery ? MAX_FETCH_DATA : 20}`);
          if (!response.ok) {
            throw new Error('Failed to fetch Pokémon.');
          }
          const data = await response.json() as { results: Pokemon[]};
          filteredResults = data.results;
          // Do filtering based on the query string
          localStorage.setItem(LIST_LOCAL_STORAGE_NAME, JSON.stringify(filteredResults));
        }

        if (searchQuery) {
          const regex = new RegExp(searchQuery, 'i'); // Case-insensitive regex
          filteredResults = filteredResults.filter(pokemon => regex.test(pokemon.name));
        }

        if (sortByField) {
          const detailsMap = await Promise.all(filteredResults.map(async (each) => {
            const detail = await fetchPokemonDetails(each.name);
            return detail.data;
          }));
          const sorted = detailsMap.sort((a: any, b: any) => a.health - b.health);
          const finalList = sorted.map((each) => {
            const data: Pokemon = {
              name: each?.name || "",
              url: "",
            }
            return data;
          })
          filteredResults = finalList;
        }

        const cappedResults = filteredResults.slice(0, 20); // Cap the results to max 20 items
        setPokemonList(cappedResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [searchQuery, sortByField]);

  const value: PokemonContextType = {
    pokemonList,
    loading,
    error,
    setSearchQuery,
    setSortByField
  };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};