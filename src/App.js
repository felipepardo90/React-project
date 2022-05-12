import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/MainContainer/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import NotFound from "./components/utils/NotFound";
import FormOrder from "./components/Cart/FormOrder";
import MadePurchase from "./components/MainContainer/MadePurchase";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route exact path="/form-order" element={<FormOrder />} />
            <Route exact path="/purchase-made" element={<MadePurchase />} />
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
            <Route exact path="/cart" element={<><Cart /><MadePurchase /></>} />
            <Route  path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
