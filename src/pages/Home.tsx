// import { useRef, useState } from "react"
// import logo from "../assets/logo.png"
// import { IoSearch } from "react-icons/io5"
import { PokemonCard, Navbar } from "../components"
import usePokemonList from "../hooks/usePokemonList"

const Home = () => {
  const { pokemonList } = usePokemonList()

  return (
    <div className='bg-dark w-80 h-full'>
      <Navbar />
      <div className='grid grid-cols-2 gap-x-4 gap-y-4 py-4'>
        {pokemonList.map((e, i) => {
          return <PokemonCard key={i} name={e.name} />
        })}
      </div>
    </div>
  )
}

export default Home
