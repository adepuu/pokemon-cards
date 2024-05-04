import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import usePokemonList from '../hooks/usePokemonList'

import { PokemonDetails } from '../hooks/usePokemonDetail'
import fetchPokemonDetails from '../util/fetchPokemonDetails'


type Pokemon = {
  name: string,
  url: string
}

interface PokemonContextType {
  pokemonList: Pokemon[],
  inputValue: string,
  setValue: (query: string) => void,
  error: unknown,
  loading: boolean,
  setSortBy: (query: string) => void,
  gridValue: number,
  setGridValue: (query: number) => void,
  pageNumber: number,
  setPageNumber: (query: number) => void,
}

export const PokemonContext = createContext<PokemonContextType | undefined>(undefined)
const getPokemonDetailMap = async (pokemonList: Pokemon[]) => {
  JSON.stringify(pokemonList)
  const mapDetails = await Promise.all(pokemonList.map(async (pokemon) => {
    try {
      const response = await fetchPokemonDetails(pokemon.name);
      return response;
    } catch (error) {
      console.error(error)
    }
  }))
  return mapDetails;
}

const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pokemonList, loading, error, pageNumber, setPageNumber } = usePokemonList();
  const [inputValue, setValue] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [pokemonSortList, setPokemonSortList] = useState<any[]>([]);
  const [gridValue, setGridValue] = useState<number>(1)




  useEffect(() => {
    const sortPokemonDetails = async () => {
      const pokemonArr = await getPokemonDetailMap(pokemonList) as PokemonDetails[];
      const sortedList = pokemonArr.sort((a, b) => {
        switch (sortBy) {
          case "HP": return a.health - b.health
          case "ID": return a.id - b.id
          case "ATK": return a.attack - b.attack
          case "DEF": return a.defense - b.defense
          default: return 1;
        }
      });
      const updatedAttributes = sortedList.map((pokemon) => ({
        name: pokemon.name,
        url: ""
      }))

      setPokemonSortList(updatedAttributes);
    };
    sortPokemonDetails();
  }, [pokemonList, sortBy])



  return (
    <PokemonContext.Provider value={{ inputValue, setValue, setSortBy, gridValue, setGridValue, pokemonList: pokemonSortList, loading, error, pageNumber, setPageNumber }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider;

export const usePokemonContext = () => {
  const ctx = useContext(PokemonContext);
  if (ctx === undefined) throw new Error("Outside of provider");
  return ctx;
}
