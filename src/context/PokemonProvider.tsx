import { useEffect, useState } from "react"
import PokemonContext, { Pokemon, PokemonContextType } from "./PokemonContext"
import fetchPokemonDetails from "../service/PokemonDetail"
import { PokemonDetails } from "../hooks/usePokemonDetail"

export const LOCAL_STORAGE_GRID = "gridStorage"
const LIST_LOCAL_STORAGE_POKEMON = "pokemonListStorage"

type PokemonListResult = {
  count: number
  next: string | null
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  let [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [gridValue, setGridValue] = useState<number>(2)
  const [sortBy, setSortbyQuery] = useState<string>("Sort by")
  const [page, setPage] = useState<number>(1)

  const MAX_FETCH_DATA = 10000
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true)

        let result: Pokemon[]

        const storeGridValue = localStorage.getItem(LOCAL_STORAGE_GRID)
        if (storeGridValue) {
          const parsedData: string = JSON.parse(storeGridValue)
          setGridValue(Number.parseInt(parsedData))
        }

        const storePokemonList = localStorage.getItem(
          LIST_LOCAL_STORAGE_POKEMON
        )
        if (storePokemonList && storePokemonList.length > 0) {
          const parsedData: Pokemon[] = JSON.parse(storePokemonList)
          result = parsedData
        } else {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${MAX_FETCH_DATA}`
          )
          if (!response.ok) {
            throw new Error("Failed to fetch Pokémon.")
          }

          const data = (await response.json()) as PokemonListResult

          result = data.results
          localStorage.setItem(
            LIST_LOCAL_STORAGE_POKEMON,
            JSON.stringify(result)
          )
        }

        if (searchQuery) {
          const regex = new RegExp(searchQuery, "i") // Case-insensitive regex
          result = result.filter((pokemon) => regex.test(pokemon.name))
        }

        if (sortBy !== "Sort by") {
          const detailsMap = await Promise.all(
            result.map(async (e) => {
              const detail = await fetchPokemonDetails(e.name)
              return detail.data
            })
          )

          const filteredDetailsMap: any = detailsMap.filter(
            (detail: PokemonDetails | null) => detail !== null
          )

          const sorted: PokemonDetails[] = filteredDetailsMap.sort(
            (a: PokemonDetails, b: PokemonDetails) => {
              switch (sortBy) {
                case "Hp":
                  return a.health - b.health

                case "Attack":
                  return a.attack - b.attack

                case "Defense":
                  return a.defense - b.defense

                default:
                  return 0
              }
            }
          )

          const finalSorted: Pokemon[] = sorted.map((each) => {
            const data: Pokemon = {
              name: each?.name || "",
              url: "",
            }
            return data
          })
          result = finalSorted
        }
        if (page === 1) setPokemonList([])

        const cappedResults = result.slice((page - 1) * 20, page * 20)
        setPokemonList((prev) => [...prev, ...cappedResults])
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchPokemonList()
  }, [searchQuery, sortBy, page])

  const value: PokemonContextType = {
    pokemonList,
    loading,
    error,
    setSearchQuery,
    searchQuery,
    setGridValue,
    gridValue,
    setSortbyQuery,
    sortBy,
    page,
    setPage,
  }

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  )
}
