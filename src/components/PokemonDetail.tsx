import React from 'react'
import usePokemonDetails from '../hooks/usePokemonDetail'


interface pokemonName {
  name: string
}


const PokemonDetail: React.FC<pokemonName> = ({ name }) => {
  const { pokemonDetails } = usePokemonDetails(name)
  return (
    <div className="lg:px-96" >
      <h1 className='text-lightPurple font-DM-Sans font-normal text-xl p-6'>#1000</h1>
      <img className="flex justify-center w-full px-8" src={pokemonDetails?.artworkFront} alt="" />
      <div className="desc-name flex justify-between px-8 items-center">
        <h1 className='font-DM-Sans text-default text-6xl font-bold'>{pokemonDetails?.name}</h1>
        <img src={pokemonDetails?.spriteFront} alt="" />
      </div>
      <div className="card-desc bg-blue mx-8 p-4 rounded-lg">
        <h2 className='text-lightPurple text-xl font-DM-Sans font-normal'>Health</h2>
        <div className="bg-DarkBlue w-full rounded-lg" >
          <div className='bg-gradient-to-r p-2 from-green to-lightGreen rounded-lg' style={{ width: `${pokemonDetails?.health === undefined ? 0 : pokemonDetails.health / 100 * 100}%` }}>
          </div>
        </div>
        <div className="health flex gap-4 text-default font-DM-Sans py-3 items-center  border-b-DarkBlue border-b-[2px]">
          <h1 className='text-4xl font-bold'>{pokemonDetails?.health}</h1>
          <h3 className='text-2xl font-semibold'>from 100</h3>
        </div>
        <div className="stat grid grid-cols-2 gap-4  font-DM-Sans py-4">
          <div className="attack">
            <h1 className='text-lightPurple text-xl'>Attack</h1>
            <h1 className='text-4xl font-bold text-default'>{pokemonDetails?.attack}</h1>
          </div>
          <div className="defence">
            <h1 className='text-lightPurple text-xl'>Defense</h1>
            <h1 className='text-4xl font-bold text-default'>{pokemonDetails?.defense}</h1>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PokemonDetail