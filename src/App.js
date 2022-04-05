import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/MainContainer/ItemListContainer';

export default function App() {

  return (
    
    <>
    <NavBar />

    <ItemListContainer />
    
    </>
    
  );
}