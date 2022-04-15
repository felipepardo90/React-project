import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import products from "../utils/products.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    customFetch(2000, products, 'I', id)
      .then((resultado) => setItems(resultado))
      .catch((error) => console.log(error));
  }, [id]);


  return (
    <>
     <ItemDetail products={items} />

    </>
  );
}
