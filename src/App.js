import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/MainContainer/ItemListContainer";
import ItemDetailContainer from "./components/MainContainer/ItemDetailContainer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/detail" element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
