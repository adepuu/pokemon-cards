import { TfiLayoutGrid2Alt } from "react-icons/tfi"
import { RiCheckboxBlankFill } from "react-icons/ri"
import { useState } from "react"
import usePokemonList from "../hooks/usePokemonList"

const Layout = () => {
  const { setGridValue: setGridValueGlobal } = usePokemonList()
  const [gridVal, setGridVal] = useState<number>(2)
  return (
    <div className='flex justify-between mt-4'>
      <select
        className='w-8/12 bg-light-purple text-purple rounded-lg'
        defaultValue='Sort by'
      >
        <option value='Sort by'>Sort by</option>
        <option value='Hp'>Hp</option>
        <option value='Attack'>Attack</option>
        <option value='Defense'>Defense</option>
      </select>
      <div className='flex'>
        <button
          className={`p-2.5 bg-${
            gridVal === 2 ? "dark-button" : "light-purple"
          } rounded-l-lg`}
          onClick={() => {
            setGridVal(1)
            setGridValueGlobal(1)
          }}
        >
          <RiCheckboxBlankFill size={20} color='#97A0CC' />
        </button>
        <div className='border border-purple' />
        <button
          className={`p-2.5 bg-${
            gridVal === 2 ? "light-purple" : "dark-button"
          } rounded-r-lg`}
          onClick={() => {
            setGridVal(2)
            setGridValueGlobal(2)
          }}
        >
          <TfiLayoutGrid2Alt size={20} color='#97A0CC' />
        </button>
      </div>
    </div>
  )
}

export default Layout
