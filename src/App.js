import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/MainContainer/ItemListContainer";
import Cart from "./components/Navbar/Cart";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
