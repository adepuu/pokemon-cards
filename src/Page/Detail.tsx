import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PokemonDetail from '../components/PokemonDetail';

const Detail: React.FC = () => {
  // const [searchIcon, setSearchIcon] = useState(false);
  const { name = "" } = useParams();
  return (
    <section className='details mb-11'>
      <NavBar />
      <PokemonDetail name={name} />
    </section>
  )
}

export default Detail