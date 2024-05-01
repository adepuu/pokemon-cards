import Navbar from "../components/Navbar/Navbar";
import DetailCard from "../components/Detail/Detail";
import usePokemonDetails from "../hooks/usePokemonDetail";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { pokemonDetails } = usePokemonDetails(id);

  return (
    <>
      <Navbar showSearchIcon={false} />
      <div
        className="max-w-screen-sm px-7 py-7 bg-[#212E4C] flex flex-col text-left gap-2
        mx-auto">
        <h2 className="text-lg font-lato text-[#97A0CC]">
          {`# ${pokemonDetails?.id}`}
        </h2>
        <img src={pokemonDetails?.artworkFront} alt="Pokemon Image" />
        <div className="flex justify-between items-center text-white font-lato text-4xl">
          <h1 className="">{pokemonDetails?.name}</h1>
          <img src={pokemonDetails?.spriteFront} alt="Sprite Pokemon" />
        </div>
        <DetailCard
          defense={pokemonDetails?.defense}
          health={pokemonDetails?.health}
          attack={pokemonDetails?.health}
        />
      </div>
    </>
  );
};

export default DetailPage;
