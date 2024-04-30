import { useCallback } from "react";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string
}

const Card: React.FC<CardProps> = ({ name }) => {
  const { pokemonDetails, loading, error } = usePokemonDetails(name);
  const navigate = useNavigate();

  const handleClickCard = useCallback(() => {
    navigate(`/detail/${name}`);
  }, [name, navigate]);

  if (loading || !pokemonDetails) return <div>Loading...</div>
  if (error) return <div>Something is wrong</div>
  return (
    <div onClick={handleClickCard} className="w-full pt-10 pb-2 px-5 bg-brilliant-white rounded-2xl">
      <img src={pokemonDetails.artworkFront} alt="pokemon" />
      <div className="text-sm font-bold leading-[14px] mt-2 text-center capitalize">{pokemonDetails.name}</div>
    </div>
  );
};

export default Card;
