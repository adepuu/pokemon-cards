import { useNavigate } from "react-router-dom"
import usePokemonDetails from "../hooks/usePokemonDetail"

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const { pokemonDetails } = usePokemonDetails(name)
  const navigate = useNavigate()

  return (
    <button
      className='flex flex-col bg-white items-center rounded-lg flex-shrink p-5 hover:scale-x-110 group'
      onClick={() => navigate(`/detail/${name}`, { state: pokemonDetails })}
    >
      <img
        src={pokemonDetails?.artworkFront}
        alt=''
        className='group-hover:scale-150 transition group-hover:-translate-y-5'
      />
      <div className='font-dm-sans text-sm mt-2'>{name}</div>
    </button>
  )
}

export default PokemonCard
