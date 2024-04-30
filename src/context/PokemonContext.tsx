import { createContext } from 'react';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonContextType {
  pokemonList: Pokemon[];
  loading: boolean;
  error: unknown;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;
