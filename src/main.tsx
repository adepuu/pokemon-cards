import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import PokemonProvider from './Context/PokemonContext.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PokemonProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PokemonProvider>
    </ChakraProvider>
  </React.StrictMode >,
)
