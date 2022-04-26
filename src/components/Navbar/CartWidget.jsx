import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./_NavbarStyles.scss";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function CartWidget() {
  let { cart, quantity } = useContext(CartContext);
  console.log(quantity);
  return (
    <>
    <div className="cart__widget">

      <Link to="/cart" style={{ textDecoration: "none" }}>
      <FontAwesomeIcon icon={faCartShopping} className="cart__icon"/>
      </Link>
      {cart.length > 0 && <span className="cart__length">{quantity}</span>}
    </div>
    </>
  );
}