import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PokemonContext, usePokemonContext } from '../Context/PokemonContext'

interface Pokemon {
  name: string
  url: string
}

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  let pokemonList2: Pokemon[] = []
  let pokemonListResult: Pokemon[] = []

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true)

        if (pokemonList.length > 1) {
          pokemonList2 = pokemonList
        }
        const limit = 20
        const offset = (pageNumber - 1) * limit

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon.')
        }
        const data = await response.json()
        pokemonListResult = [...pokemonList2, ...data.results]
        console.log(pokemonListResult)
        setPokemonList(pokemonListResult)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(true)
      }
    }
    fetchPokemonList()
    // fetchPokemonList()
  }, [error, loading, pageNumber])
  return { pokemonList, loading, error, pageNumber, setPageNumber }
}

export default usePokemonList
