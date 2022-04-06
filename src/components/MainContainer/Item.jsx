import React from 'react'
import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"
import './ItemListContainer.module.css'

export default function Item({id, name, price, description, stock, image}) {

  return (

         <Card style={{ width: '18rem'}} key={id}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
  <Card.Title>{name}</Card.Title>
    <Card.Text>
        {price},{stock} elementos en stock <br/>
        {description}
    </Card.Text>
    <ItemCount initial={0} stock={stock}/>
  </Card.Body>
</Card>

  )
}
