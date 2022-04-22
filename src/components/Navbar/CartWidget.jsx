import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import s from "./NavStyles.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function CartWidget() {
   let {cart} = useContext(CartContext)
  return (
    <>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className={s.colorIcon} />
        <h6 style={{color:"black"}}>({parseInt(cart.count)})</h6>
      </Link>
    </>
  );
}
