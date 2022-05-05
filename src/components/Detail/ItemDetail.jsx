import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./DetailStyles.scss";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ products }) {
  const [index, setIndex] = useState(0);

  const addOn = (index) => {
    setIndex(index);
  };

  return (
    <Container key={products.id} className="detail__container">
      <section className="detail">

      <img
        src={products.image}
        alt={products.name}
        className="detail__img"
      />
      <div className="detail__body">
        <h2 className="detail__body--title">{products.name}</h2>
        <h3 className="detail__body--price">$AR {products.price}</h3>
        <section className="detail__body--description">{products.description}</section>
      </div>
      <section>
        {index === 0 ? (
          <ItemCount
            stock={products.stock}
            initial={1}
            products={products}
            addOn={addOn}
          />
        ) : (
          <>
            <section style={{ padding: "10px 5px" }}>
              <h4>
                Has añadido {products.name} a tu carrito. ¿Deseas continuar con
                la compra?
              </h4>
              <Button variant="danger">
                <Link to="/cart">Terminar mi compra</Link>
              </Button>
              <Button variant="danger">
                <Link to="/React-project">Seguir navegando</Link>
              </Button>
            </section>
          </>
        )}
      </section>

      </section>
    </Container>
  );
}
