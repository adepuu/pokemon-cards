import { usePokemonContext } from '../Context/PokemonContext';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import usePokemonList from '../hooks/usePokemonList';

const Home = () => {
  const { pokemonList } = usePokemonList();
  const { inputValue } = usePokemonContext()
  const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()))


  // console.log(usePokemonList)
  return (
    <>
      <section className="home">
        <NavBar />
        <div className='grid gap-4 w-full justify-between px-[21px] py-6 grid-cols-2 md:grid-cols-4'>
          {filteredPokemonList.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

      </section>

    </>
  )
}

export default Home