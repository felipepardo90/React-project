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
        <NavBar>
          <Routes>
            <Route path="/" element={<ItemDetailContainer />}>
              <Route  />
            </Route>
          </Routes>
        </NavBar>
      </BrowserRouter>

      <ItemDetailContainer />

      <ItemListContainer />
    </>
  );
}
