// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Detail } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/detail/:name", element: <Detail /> },
])

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <div className=' flex items-start justify-center'>
      <div className='px-7 bg-dark min-h-screen'>
        <RouterProvider router={router} />
      </div>
      {/* Start the development here */}
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}
    </div>
  )
}

export default App
