import React from "react";
import { Container } from "react-bootstrap";
import s from './ItemListContainer.module.css'
import ItemCount from './ItemCount'

export default function ItemDetail({ products }) {
  return products.map((p) => (
    <Container key={p.id} className={s.detailContainer}>
      <img src={p.image} alt={p.name} width={250} height={250}/>
      <div>
        <h2>{p.name}</h2>
        <h3>{p.price}</h3>
        <section>{p.description}</section>
      </div>
      <section>
        <ItemCount stock={p.stock} initial={0}/>
      
      </section>
    </Container>
  ));
}
