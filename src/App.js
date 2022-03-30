import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './components/ItemCount';

export default function App() {

  return (
    
    <>
    <NavBar />
    <ItemCount stock="5" initial="1"></ItemCount>
    
    </>
    
  );
}



