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
          <Button variant="danger" onClick={decNum}>
            -
          </Button>{" "}
          <div>
            <p style={{margin:"5px 10px", fontWeight:"50px"}}>{count}</p>
          </div>
          <Button variant="primary" onClick={incNum}>
            +
          </Button>{" "}
          <Button variant="secondary" onClick={reset}>
            Agregar al carrito
          </Button>{" "}
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
