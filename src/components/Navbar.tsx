import { useEffect, useRef, useState } from "react"
import logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5"

const Navbar: React.FC<{ isLanding?: boolean }> = ({ isLanding }) => {
  const [isSearch, setSearch] = useState(false)
  const search = useRef<HTMLInputElement>(null)
  let [count, setCount] = useState<number>(0)

  const handleSearch = () => {
    if (search.current) {
      const value = search.current.value
      console.log(`input : ${value}`)
    }
    setSearch(false)
  }

  return (
    <div
      className={`flex items-center justify-between 
       py-2 border-b-2 border-[#3D4466]`}
    >
      <img src={logo} alt='Logo' />
      {isLanding ?? (
        <div>
          {isSearch ? (
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
