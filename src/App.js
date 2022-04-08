import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/MainContainer/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';

// import TestContainer from './components/Test/TestContainer';

export default function App() {

  return (
    
    <>
    <BrowserRouter>
    <NavBar />
    </BrowserRouter>
    

    <ItemListContainer />

    {/* <TestContainer /> */}
    
    </>
    
  );
}