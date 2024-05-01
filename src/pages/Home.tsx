import { PokemonCard, Navbar, Loading, Error } from "../components"
import usePokemonList from "../hooks/usePokemonList"

const Home = () => {
  const { pokemonList, loading, error } = usePokemonList()

  if (error) {
    return <Error />
  }

  return (
    <div className='bg-dark w-80 h-full'>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-2 gap-x-4 gap-y-4 py-4'>
          {pokemonList.map((e, i) => {
            return <PokemonCard key={i} name={e.name} />
          })}
        </div>
      )}
    </div>
  )
}

export default Home
