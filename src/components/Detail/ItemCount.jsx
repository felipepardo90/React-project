import React, { useContext } from "react";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import s from "./DetailStyles.module.css";
import { CartContext } from "../Navbar/CartContext";

export default function ItemCount({ stock, initial, products, addOn }) {

  const {addItem} = useContext(CartContext);

  console.log(addItem)

  const Counter = (initial) => {
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
      addOn(count)
      addItem({...products, count})
      setCount(1);
    };

    console.log(addItem())

    return {
      count,
      incNum,
      decNum,
      reset,
    };
  };

  let { count, incNum, decNum, reset } = Counter(initial);

  return (
    <>
      <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button className={s.dec__button} onClick={decNum}>
            -
          </Button>{" "}
          <div style={{backgroundColor:"violet"}}>
            <p style={{margin:"5px 10px", fontWeight:"bold"}}>{count}</p>
          </div>
          <Button style={{borderRadius:"0 5px 5px 0"}} className={s.inc__button} onClick={incNum}>
            +
          </Button>{" "}
          <Button className={s.add__cart__btn} style={{marginLeft:"2em", border:"none", borderRadius:"5px"}} onClick={reset}>
            Agregar al carrito
          </Button>{" "}
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
