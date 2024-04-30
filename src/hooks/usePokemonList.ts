import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";

const usePokemonList = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonList must be used within a PokemonProvider');
  }
  return context;
};

export default usePokemonList;