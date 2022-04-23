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
        {cart === 0?null: <span style={{zIndex:"1", background:"red", color:"white", borderRadius:"50%", width:"10px", height:"10px", padding:"2px 5px", fontSize:"0.6em",right:"20px", bottom:"25px", position:"relative"}}>{cart.length}</span>}
      </Link>
    </>
  );
}
