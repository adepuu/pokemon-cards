/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import fetchPokemonDetails from '../util/fetchPokemonDetails'

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
    type: { name: string; url: string }
  }[]
}

const usePokemonDetails = (pokemonName: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true)
        const storedDetail = localStorage.getItem(pokemonName)
        if (storedDetail && storedDetail.length > 0) {
          const parsedData: PokemonDetails = JSON.parse(storedDetail)
          setPokemonDetails(parsedData)
          setLoading(false)
          return
        }
        const response = await fetchPokemonDetails(pokemonName)
        localStorage.setItem(response.name, JSON.stringify(response))
        setPokemonDetails(response)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    getDetails()
  }, [pokemonName])

  return { pokemonDetails, loading, error }
}

export default usePokemonDetails
