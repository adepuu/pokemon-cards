// import usePokemonList from "../../hooks/usePokemonList";
// import { useNavigate } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetail";

interface CardProps {
  pokemon: any;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const { pokemonDetails } = usePokemonDetails(pokemon.name);
  // console.log(pokemonDetails?.id);

  // const navigate = useNavigate();

  // const toDetails = () => {
  //   navigate(`/details/${pokemonDetails?.id}`);
  // };

  return (
    <div
      className="card bg-[#F0F3FF] shadow-md rounded-lg m-4 cursor-pointer"
      // onClick={toDetails}
    >
      <img
        src={pokemonDetails?.artworkFront}
        className="card-img-top mx-auto my-8"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-lg font-semibold text-center mb-4">
          {pokemon.name}
        </h5>
      </div>
    </div>
  );
};

export default Card;
