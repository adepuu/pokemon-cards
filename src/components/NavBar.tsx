import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../Context/PokemonContext';
import logo from '../assets/Logo.png';
import icon from '../assets/SearchIcon.png';




const NavBar: React.FC = () => {
  const [search, setSearch] = useState(true);
  const { inputValue, setValue } = usePokemonContext()
  const changeSearchIconState = useCallback(() => {
    setSearch((t) => !t);
  }, [search])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  }

  return (
    <>
      <div className='w-full px-5 py-2 flex justify-between bg-DarkBlue items-center border-b-default border-b-[1px]'>
        <Link to='/'><img className="lg:h-12" src={logo} alt="" /></Link>
        {search ? <img src={icon} alt="" className='w-5 h-[18px] lg:h-8 lg:w-8' onClick={() => changeSearchIconState()} /> : <input onBlur={() => changeSearchIconState()} value={inputValue} onChange={handleInputChange} className="rounded-md bg-purple py-1 px-2 text-DM-Sans text-sm placeholder:text-lightPurple lg:px-8 lg:py-3" placeholder="Search..." type='texts' />}
      </div>
    </>
  )
}

export default NavBar