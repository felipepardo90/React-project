import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/MainContainer/ItemListContainer";
import ItemDetailContainer from "./components/MainContainer/ItemDetailContainer";
import CartItems from "./components/Navbar/CartItems";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/:mypurchase" element={<CartItems />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
