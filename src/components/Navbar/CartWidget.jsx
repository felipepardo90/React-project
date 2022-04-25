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
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faCartShopping} className="cart__widget" />
        {cart.length > 0 && <span className="cart__length">{quantity}</span>}
      </Link>
    </>
  );
}
