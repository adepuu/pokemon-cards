import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'

const App: React.FC = () => {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <>
      {/* Start the development here */}
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}

      {/* <Home /> */}

      <RouterProvider router={router} />
    </>
  );
};

export default App;
