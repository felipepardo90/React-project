import React, { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import products from "../utils/products.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, products.filter(p=>p.id===1))
      .then((resultado) => setItems(resultado))
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
     <ItemDetail products={items} to="/detail" />

    </>
  );
}
