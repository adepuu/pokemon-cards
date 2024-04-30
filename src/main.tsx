import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from './pages/ListPage/index.tsx';
import PokeDetail from './pages/PokeDetail/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />
  },
  {
    path: "/detail/:name",
    element: <PokeDetail />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
