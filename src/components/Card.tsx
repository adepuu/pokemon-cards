import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../Context/PokemonContext';
import usePokemonDetails from '../hooks/usePokemonDetail';
import { Box, Skeleton } from '@chakra-ui/react';



interface pokemonProps {
  name: string,
  url: string
  isLastElement: boolean
}

const Card: React.FC<pokemonProps> = ({ name, isLastElement }) => {
  const { pokemonDetails } = usePokemonDetails(name)
  const { gridValue, setPageNumber, pageNumber, loading } = usePokemonContext();
  const navigate = useNavigate()
  const { ref, inView } = useInView();
  function handleClick() {
    navigate(`/detail/${name}`)
  }
  const BackgroundColorMap: { [key: string]: string } = {
    "water": 'text-lightBlue',
    "grass": "text-green",
    "poison": "text-rebeccaPurple",
    "fire": "text-red-400",

  }

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1)
    }

  }, [inView, setPageNumber])


  return (
    <>
      {loading ? (<div className=''><Skeleton bg='brand.500' startColor='gray.500' endColor='gray.200' height={'350px'} /></div>) :
        <div className='flex flex-col bg-purple rounded-md w-full p-5  transition cursor-pointer group' onClick={handleClick} ref={isLastElement ? ref : null}>
          {!gridValue ? <div className="flex justify-between">
            <div className="flex flex-col">
              {pokemonDetails?.types.map((pokemon, index) => (
                <h1 key={index} className={`${BackgroundColorMap[pokemon.type.name]} font-DM-Sans text-lg font-bold`}>{pokemon.type.name.charAt(0).toLocaleUpperCase() + pokemon.type.name.slice(1)}</h1>
              ))}
            </div>
            <h1 className='font-DM-Sans font-bold text-lg'>#{pokemonDetails?.id}</h1>
          </div> : ""}
          <img src={pokemonDetails?.artworkFront} className='group-hover:scale-150 transition group-hover:-translate-y-8' />
          <div className="desc py-[5px] flex flex-col text-center text-DM-Sans text-DarkBlue font-bold text-sm lg:text-xl">
            <h2>{name}</h2>
          </div>
        </div >
      }

    </>
  )
}

export default Card