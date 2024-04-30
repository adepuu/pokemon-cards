import { useParams } from "react-router-dom";
import MobileWrapper from "../../components/MobileWrapper";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import classNames from "classnames";
import Header from "../../components/Header";

const PokeDetail: React.FC = () => {
  const { name = "" } = useParams();

  const { pokemonDetails, loading, error } = usePokemonDetails(name);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something is wrong</div>;
  if (!name || !pokemonDetails) return <div>Not Found</div>;

  return (
    <MobileWrapper>
      <Header />
      <div className="w-full h-full px-6 py-8">
        <div className="w-full relative mb-3">
          <img src={pokemonDetails.artworkFront} alt="pokemon image" />
        </div>
        <div className="w-full relative mb-1">
          <span className="text-4xl text-white font-bold leading-[30px] capitalize">
            {pokemonDetails.name}
          </span>
          <img
            src={pokemonDetails.spriteFront}
            className="absolute right-0 bottom-0"
            alt="pokemon sprites"
          />
        </div>
        <div className="rounded-2xl bg-dark-rift p-4 flex flex-col gap-2">
          <div className=" text-velvet-robe leading-[14px]">
            Health
          </div>
          <div className="w-full rounded-full bg-chronicle h-[6px]">
            <div
              style={{
                width: `${pokemonDetails.health}%`,
              }}
              className={classNames("rounded-full bg-screen-glow h-full")}
            ></div>
          </div>
          <div className=" items-center flex gap-2 font-bold leading-7 pb-[10px] text-white border-b-[1px] border-chronicle">
            <div className="text-2xl ">{pokemonDetails.health}</div>
            <div className="text-base font-normal">from 100</div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-1 basis-1/2">
              <span className="leading-[14px] text-velvet-robe">Attack</span>
              <span className="text-white text-2xl font-bold">{pokemonDetails.attack}</span>
            </div>
            <div className="flex flex-col gap-1 basis-1/2">
              <span className="leading-[14px] text-velvet-robe">Defense</span>
              <span className="text-white text-2xl font-bold">{pokemonDetails.defense}</span>
            </div>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default PokeDetail;
