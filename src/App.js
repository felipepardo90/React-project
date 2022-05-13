import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/MainContainer/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import NotFound from "./components/utils/NotFound";
import FormOrder from "./components/Cart/CheckOut";
import MadePurchase from "./components/MainContainer/MadePurchase";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";
import CheckOut from "./components/Cart/CheckOut";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/React-project"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
