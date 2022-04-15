import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./ItemListContainer.module.css";

export default function Item({ id, name, price, stock, image }) {
  return (
    <Card style={{ width: "18rem",}} key={id}>
      <Card.Img variant="top" src={image} className={s.card_img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {stock} elementos en stock <br />
          {price} <br />
        </Card.Text>
        <Button variant="primary"><Link to={`/item/:${id}`}>Ver producto</Link></Button>{" "}
      </Card.Body>
    </Card>
  );
}
