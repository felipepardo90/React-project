import React from 'react'
import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

export default function Item(id, product_name, price, description, stock, image) {

  return (

         <Card style={{ width: '18rem' }} key={id}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{product_name}</Card.Title>
    <Card.Text>
        <div>
        <h4>{price}</h4> {stock}
        {description}
        </div>
    </Card.Text>
    <ItemCount stock={stock}/>
  </Card.Body>
</Card>

  )
}
