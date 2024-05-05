import { TfiLayoutGrid2Alt } from "react-icons/tfi"
import { RiCheckboxBlankFill } from "react-icons/ri"
import usePokemonList from "../hooks/usePokemonList"
import { LOCAL_STORAGE_GRID } from "../context/PokemonProvider"

const Layout = () => {
  const {
    setGridValue: setGridValueGlobal,
    gridValue,
    setSortbyQuery: setSortByGlobal,
    sortBy,
  } = usePokemonList()

  return (
    <div className='flex justify-between mt-4'>
      <select
        className='w-8/12 bg-light-purple text-purple rounded-lg'
        value={sortBy}
        onChange={(e) => {
          setSortByGlobal(e.target.value)
        }}
      >
        <option value='Sort by'>Sort by</option>
        <option value='Hp'>Hp</option>
        <option value='Attack'>Attack</option>
        <option value='Defense'>Defense</option>
      </select>
      <div className='flex'>
        <button
          className={`p-2.5 bg-${
            gridValue === 2 ? "dark-button" : "light-purple"
          } rounded-l-lg`}
          onClick={() => {
            setGridValueGlobal(1)
            localStorage.setItem(LOCAL_STORAGE_GRID, JSON.stringify(1))
          }}
        >
          <RiCheckboxBlankFill size={20} color='#97A0CC' />
        </button>
        <div className='border border-purple' />
        <button
          className={`p-2.5 bg-${
            gridValue === 2 ? "light-purple" : "dark-button"
          } rounded-r-lg`}
          onClick={() => {
            setGridValueGlobal(2)
            localStorage.setItem(LOCAL_STORAGE_GRID, JSON.stringify(2))
          }}
        >
          <TfiLayoutGrid2Alt size={20} color='#97A0CC' />
        </button>
      </div>
    </div>
  )
}

export default Layout
