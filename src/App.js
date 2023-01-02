import React from 'react';
import './App.css';
import ListOfBeers from './features/ListOfBeers';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
