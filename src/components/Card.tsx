import React from 'react'
import pokemon from '../assets/Pokemon.png'
import usePokemonDetails from '../hooks/usePokemonDetail'
import { useNavigate } from 'react-router-dom';


interface pokemonProps {
  name: string,
  url: string
}

const Card: React.FC<pokemonProps> = ({ name, url }) => {
  const { pokemonDetails } = usePokemonDetails(name)
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/detail/${name}`)
  }
  return (
    <>
      <div className='flex flex-col bg-purple rounded-md w-full p-5' onClick={handleClick}>
        <img src={pokemonDetails?.artworkFront} />
        <div className="desc py-[5px] flex flex-col text-center text-DM-Sans text-DarkBlue font-bold text-sm">
          <h2>{name}</h2>
        </div>
      </div>
    </>
  )
}

export default Card