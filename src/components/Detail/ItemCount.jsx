import React, { useContext } from "react";
import { useState } from "react";
import "./_DetailStyles.scss";
import { CartContext } from "../Cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ItemCount({ stock, initial, products, addOn }) {
  const { addItem } = useContext(CartContext);
  const useCounter = (initial) => {
    const [count, setCount] = useState(initial);

    const incNum = () => {
      count < stock
        ? setCount(count + 1)
        : alert("No hay más elementos en stock");
    };
    const decNum = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    const reset = () => {
      addOn(count);
      addItem({ ...products, count });
      setCount(0);
    };

    return {
      count,
      incNum,
      decNum,
      reset,
    };
  };

  let { count, incNum, decNum, reset } = useCounter(initial);

  return (
    <>
      <section className="counter-section d-flex">
        <input value={count} className="input-count" />
        <div className="button-section d-flex flex-column">
          <button className="inc__button" onClick={incNum}>
          🠹
          </button>
          <button className="dec__button" onClick={decNum}>
          🠻
          </button>
        </div>
        <button className="add__cart__btn" onClick={reset}>
          Agregar <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </section>
    </>
  );
}
