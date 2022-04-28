import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import products from "../utils/products.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=>{

const db = getFirestore()
const detailRef = doc(db, "products", id)
getDoc(detailRef).then(res=>{setItems({id:res.id, ...res.data()})})
console.log(items)

  },[id])

  // useEffect(() => {
  //   customFetch(2000, products, "I", id)
  //     .then((resultado) => setItems(resultado))
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [id]);

  return (
    <>
      {/* {loading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail products={items} />
      )} */}
      <ItemDetail products={items} />
    </>
  );
}
