<<<<<<< HEAD
import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./ItemListContainer.module.css";
=======
import React from 'react'
import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"
import './ItemListContainer.module.css'
import s from './ItemListContainer.module.css'

export default function Item({id, name, price, description, stock, image}) {
>>>>>>> c9d57f20e239ec48b7a39928ce976a7df00aeee1

export default function Item({ id, name, price, description, stock, image }) {
  return (
<<<<<<< HEAD
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price},{stock} elementos en stock <br />
          {description}
        </Card.Text>
        <ItemCount initial={0} stock={stock} />
      </Card.Body>
    </Card>
  );
=======

         <Card style={{ width: '20rem', display:'flex'}} key={id}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
  <Card.Title className={s.card__title}>{name}</Card.Title>
    <Card.Text>
        {price},{stock} elementos en stock <br/>
        {description}
    </Card.Text>
    <ItemCount initial={0} stock={stock}/>
  </Card.Body>
</Card>

  )
>>>>>>> c9d57f20e239ec48b7a39928ce976a7df00aeee1
}
