import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import s from './ItemListContainer.module.css'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";

export default function ItemDetail({ products }) {

  const [index, setIndex] = useState(0)

  const onAdd = (index) => {
    setIndex(index)
  }
  return  (
    <Container key={products.id} className={s.detailContainer}>
      <img src={products.image} alt={products.name} className={s.card_img_detail}/>
      <div>
        <h2>{products.name}</h2>
        <h3>{products.price}</h3>
        <section>{products.description}</section>
      </div>
      <section>

        {
          index === 0 ?  <ItemCount stock={products.stock} initial={1} onAdd={onAdd}/> : <Button variant="primary"><Link to='/cart'>Ver carrito</Link></Button>
        }
       
      
      </section>
    </Container>
  );
}
