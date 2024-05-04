import { PokemonDetails } from '../hooks/usePokemonDetail'

const fetchPokemonDetails = async (
  pokemonName: string
): Promise<PokemonDetails> => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon details.')
    }
    const data = await response.json()
    const spriteFront = data.sprites.front_default
    const artworkFront = data.sprites.other['official-artwork'].front_default
    const { name, id } = data
    const health = data.stats.find(
      (stat: any) => stat.stat.name === 'hp'
    ).base_stat
    const attack = data.stats.find(
      (stat: any) => stat.stat.name === 'attack'
    ).base_stat
    const defense = data.stats.find(
      (stat: any) => stat.stat.name === 'defense'
    ).base_stat
    const types = data.types

    return {
      name,
      id,
      health,
      attack,
      defense,
      spriteFront,
      artworkFront,
      types,
    }
  } catch (error) {
    throw error
  }
}

export default fetchPokemonDetails
