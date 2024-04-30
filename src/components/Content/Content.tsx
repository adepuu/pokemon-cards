import React from "react";
import Card from "../Card/Card";
import usePokemonList from "../../hooks/usePokemonList";

const Content: React.FC = () => {
  const { pokemonList } = usePokemonList();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {pokemonList.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Content;
