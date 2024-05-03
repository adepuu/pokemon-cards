import { PokemonCard, Navbar, Loading, Error, Layout } from "../components"
import usePokemonDetails from "../hooks/usePokemonDetail"
import usePokemonList from "../hooks/usePokemonList"

const Home = () => {
  const { pokemonList, loading, error, gridValue, sortBy } = usePokemonList()
  console.log("sort by", gridValue)
  if (error) {
    return <Error />
  }

  return (
    <div className='bg-dark w-80 h-full'>
      <Navbar />
      <Layout />
      {loading ? (
        <Loading />
      ) : (
        <div
          className={`grid ${
            gridValue === 2 ? "grid-cols-2" : "grid-cols-1"
          } gap-x-4 gap-y-4 py-4`}
        >
          {pokemonList.map((e, i) => {
            return <PokemonCard key={i} name={e.name} />
          })}
        </div>
      )}
    </div>
  )
}

export default Home
