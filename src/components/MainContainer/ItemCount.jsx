import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import "./ItemListContainer.module.css";

export default function ItemCount({ stock, initial, onAdd }) {
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
      onAdd(count)
      setCount(0);
    };

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
          <Button style={{backgroundColor:"violet", fontWeight:"bold", border:"none", borderRadius:"5px 0 0 5px"}} onClick={decNum}>
            -
          </Button>{" "}
          <div style={{backgroundColor:"violet"}}>
            <p style={{margin:"5px 10px", fontWeight:"bold"}}>{count}</p>
          </div>
          <Button style={{backgroundColor:"violet", fontWeight:"bold", border:"none", borderRadius:"0 5px 5px 0 "}} onClick={incNum}>
            +
          </Button>{" "}
          <Button style={{marginLeft:"5px", border:"2px solid #3e0595", backgroundColor:"violet", fontWeight:"bold", borderRadius:"5px"}} onClick={reset}>
            Agregar al carrito
          </Button>{" "}
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
