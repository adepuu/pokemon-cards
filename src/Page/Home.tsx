import { useCallback } from 'react';
import { usePokemonContext } from '../Context/PokemonContext';
import img1 from '../assets/1.png';
import img2 from '../assets/4.png';
import Card from '../components/Card';
import NavBar from '../components/NavBar';




const Home = () => {


  const { inputValue, setSortBy, pokemonList, gridValue, setGridValue, loading } = usePokemonContext();

  const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(inputValue))


  const handleGrid = useCallback(() => {
    setGridValue(0);
  }, [])

  const handleGrid2 = useCallback(() => {
    setGridValue(1);
  }, [])


  const handleSelectInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    console.log(event.target.value)
  };
  return (


    <>
      <section className="home">
        <NavBar />
        <div className="w-full  py-6 px-[21px] flex justify-between items-center">
          <select className='rounded-md bg-darkPurple text-lightPurple py-2 pr-56 pl-3' onChange={handleSelectInput}>
            <option value="">Sort by</option>
            <option value="ID">ID</option>
            <option value="HP">HP</option>
            <option value="ATK">ATK</option>
            <option value="DEF">DEF</option>
          </select>
          <div className="flex items-center">
            <div className={`${gridValue ? "bg-darkBlack" : "bg-darkPurple"} b rounded-l-md border-lightPurple border-r-[1px] px-4 py-4`} onClick={handleGrid}>
              <img className="w-4" src={img1} />
            </div>
            <div className={`${!gridValue ? "bg-darkBlack" : "bg-darkPurple"} b rounded-r-md  border-lightPurple border-l-[1px] px-4 py-4`} onClick={handleGrid2}>
              <img className="w-4" src={img2} />
            </div>
          </div>
        </div>
        {gridValue ? <div className='grid gap-4 w-full justify-between px-[21px] py-6 grid-cols-2 md:grid-cols-3'>
          {filteredPokemonList.map((item, index) => (
            <Card key={index} {...item} isLastElement={index === filteredPokemonList.length - 1} />
          ))}
        </div>
          : <div className='grid gap-4 w-full justify-between px-[21px] py-6 grid-cols-1 md:grid-cols-2'>
            {filteredPokemonList.map((item, index) => (
              <Card key={index} {...item} isLastElement={index === filteredPokemonList.length - 1} />
            ))}
          </div>}
      </section >


    </>
  )
}

export default Home