/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import fetchPokemonDetails from "../service/PokemonDetail"

export interface PokemonDetails {
  name: string
  id: number
  health: number
  attack: number
  defense: number
  spriteFront: string
  artworkFront: string
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}

const usePokemonDetails = (pokemonName: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { data, error } = await fetchPokemonDetails(pokemonName)
      if (error) setError(error)
      setPokemonDetails(data)
      setLoading(false)
    }

    fetchData()
  }, [pokemonName])

  return { pokemonDetails, loading, error }
}

export default usePokemonDetails
