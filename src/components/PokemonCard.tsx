import { useNavigate } from "react-router-dom"
import usePokemonDetails from "../hooks/usePokemonDetail"
import usePokemonList from "../hooks/usePokemonList"

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const { pokemonDetails } = usePokemonDetails(name)
  const { gridValue } = usePokemonList()
  const navigate = useNavigate()

  return (
    <button
      className='flex flex-col bg-white items-center rounded-lg flex-shrink p-5 hover:scale-x-110 group'
      onClick={() => navigate(`/detail/${name}`, { state: pokemonDetails })}
    >
      {gridValue === 1 ? (
        <div className='flex justify-between w-full'>
          <div className='flex flex-col items-start'>
            {pokemonDetails?.types.map((e, i) => (
              <h1
                key={i}
                className='font-dm-sans text-green-700 text-base font-bold'
              >
                {e.type.name[0].toUpperCase() + e.type.name.slice(1)}
              </h1>
            ))}
          </div>
          <h1 className='font-dm-sans text-dark-blue-700 text-base font-bold'>{`#${pokemonDetails?.id}`}</h1>
        </div>
      ) : null}

      <img
        src={pokemonDetails?.artworkFront}
        alt=''
        className='group-hover:scale-150 transition group-hover:-translate-y-5'
        loading='lazy'
      />
      <div className='font-dm-sans text-sm mt-2'>{pokemonDetails?.name}</div>
    </button>
  )
}

export default PokemonCard
