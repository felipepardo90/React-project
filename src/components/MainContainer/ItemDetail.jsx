import React from "react";
import { Container } from "react-bootstrap";
import s from './ItemListContainer.module.css'
import ItemCount from './ItemCount'

export default function ItemDetail({ products }) {
  return products.map((p) => (
    <Container key={p.id} className={s.detailContainer} to={`/category/${p.category}`}>
      <img src={p.image} alt={p.name} className={s.card_img_detail}/>
      <div>
        <h2>{p.name}</h2>
        <h3>{p.price}</h3>
        <section>{p.description}</section>
      </div>
      <section>
        <ItemCount stock={p.stock} initial={1}/>
      
      </section>
    </Container>
  ));
}
