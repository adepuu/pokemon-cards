import React, { ReactNode, createContext, useContext, useState } from 'react'
import usePokemonList from '../hooks/usePokemonList'


type Pokemon = {
  name: string,
  url: string
}

interface PokemonContextType {
  pokemonList: Pokemon[],
  inputValue: string,
  setValue: (query: string) => void,
  error: unknown,
  loading: boolean
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)



const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pokemonList, loading, error } = usePokemonList();
  const [inputValue, setValue] = useState<string>('');
  return (
    <PokemonContext.Provider value={{ inputValue, setValue, pokemonList, loading, error }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider


export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};