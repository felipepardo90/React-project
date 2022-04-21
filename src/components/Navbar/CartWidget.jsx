import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import s from "./NavStyles.module.css";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className={s.colorIcon} />
      </Link>
    </>
  );
}
