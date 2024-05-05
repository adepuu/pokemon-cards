import { useEffect } from "react"
import { PokemonCard, Navbar, Loading, Error, Layout } from "../components"
import usePokemonList from "../hooks/usePokemonList"

const Home = () => {
  const {
    pokemonList,
    loading,
    error,
    gridValue,
    page,
    setPage: setPageGlobal,
    searchQuery,
  } = usePokemonList()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [page])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPageGlobal(page + 1)
    }
  }

  console.log(`input : ${searchQuery}`)

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
