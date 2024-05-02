import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListPage from "./pages/ListPage/index.tsx";
import PokeDetail from "./pages/PokeDetail/index.tsx";
import { PokemonProvider } from "./context/PokemonProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "/detail/:name",
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokemonProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PokemonProvider>
  </React.StrictMode>
);
