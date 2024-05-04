import { Route, Routes } from 'react-router-dom'
import Detail from './Page/Detail'
import Home from './Page/Home'
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:name' element={<Detail />} />
    </Routes>
  )
}

export default App
