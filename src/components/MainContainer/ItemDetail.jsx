import React from "react";
import { Container } from "react-bootstrap";
import s from './ItemListContainer.module.css'
import ItemCount from './ItemCount'

export default function ItemDetail({ products }) {
  return  (
    <Container key={products.id} className={s.detailContainer} to={`/category/${products.category}`}>
      <img src={products.image} alt={products.name} className={s.card_img_detail}/>
      <div>
        <h2>{products.name}</h2>
        <h3>{products.price}</h3>
        <section>{products.description}</section>
      </div>
      <section>
        <ItemCount stock={products.stock} initial={1}/>
      
      </section>
    </Container>
  );
}
