import React from 'react';
import './App.css';
import ListOfBeers from './features/ListOfBeers';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ListOfBeers />
      </div>
    </ChakraProvider>
  );
}

export default App;
