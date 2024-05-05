import { useRef, useState } from "react"
import logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5"
import usePokemonList from "../hooks/usePokemonList"
// import { useDebouncedCallback } from "use-debounce"

const Navbar: React.FC<{ isLanding?: boolean }> = ({ isLanding }) => {
  const [isSearch, setSearch] = useState(false)
  const search = useRef<HTMLInputElement>(null)
  const { setSearchQuery: setSearchQueryGlobal } = usePokemonList()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (search.current) {
      const value = search.current.value
      setSearchQueryGlobal(value)
    }
    setSearch(false)
  }

  //function debouncing
  // const debounced = useDebouncedCallback(
  //   (value) => {
  //     // setSearchQuery(value)
  //     setSearchQueryGlobal(value)
  //   },
  //   // delay in ms (1s)
  //   1000
  // )

  return (
    <div
      className={`flex items-center justify-between 
       py-2 border-b-2 border-[#3D4466]`}
    >
      <img src={logo} alt='Logo' />
      {isLanding ?? (
        <div>
          {isSearch ? (
            //with debouncing
            // <input
            //   onChange={(e) => debounced(e.target.value)}
            //   onBlur={() => setSearch(false)}
            //   className='px-4 py-[6px] text-sm rounded-xl'
            //   type='text'
            //   placeholder='Search...'
            // />
            //without debouncing
            <form onSubmit={handleSearch}>
              <input
                className='rounded-lg px-[14px] py-1 outline-none'
                type='text'
                placeholder='Search...'
                ref={search}
              />
            </form>
          ) : (
            <button onClick={() => setSearch(!isSearch)}>
              <IoSearch size={25} color='white' />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
