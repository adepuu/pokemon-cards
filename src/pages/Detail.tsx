import { useLocation } from "react-router-dom"
import { Navbar } from "../components"

const Detail = () => {
  const { state } = useLocation()
  const healthWidth = Math.ceil(state.health / 10)
  return (
    <div className='w-80 h-full '>
      <Navbar isLanding={false} />
      <div className='p-[25px]'>
        <p className='text-purple text-[18px]'>{`#${state.id}`}</p>
        <img src={state.artworkFront} alt='pukimon-image' />
        <div className='flex relative items-center justify-between'>
          <h1 className='font-dm-sans text-4xl text-white'>{state.name}</h1>
          <img
            className='absolute right-[-17px]'
            src={state.spriteFront}
            alt='pukimon-image'
          />
        </div>
        <div className='bg-dark-blue p-4 mt-4 rounded-lg'>
          <h1 className='text-purple'>Health</h1>
          <div className='h-1.5 bg-purple rounded-md'>
            <div
              style={{ width: `${healthWidth}%` }}
              className='bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] h-full rounded-md'
            />
          </div>
          <h1 className='text-white'>{`${state.health}  from 1000`}</h1>
          <hr className='border-[#3D4466] mt-[10px] mb-[15px]' />
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-purple'>Attack</h1>
              <h1 className='text-white'>{state.attack}</h1>
            </div>
            <div>
              <h1 className='text-purple'>Defense</h1>
              <h1 className='text-white'>{state.defense}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
