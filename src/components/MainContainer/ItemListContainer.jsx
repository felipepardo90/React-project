import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
// import customFetch from "../utils/customFetch";
// import productsJson from "../utils/products.json";
import "./ItemListContainer.scss";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productsRef = collection(db, "products");
    let q;

    if (!id) q = getDocs(productsRef);
    if (category)
      q = getDocs(query(productsRef, where("category", "==", category)));

    

      q
      .then(res => {
          const documento = res.docs
          let misProductos = []

          documento.forEach(producto => {
              const consultaFinal = {
                  id: producto.id,
                  ...producto.data()
              }
              misProductos.push(consultaFinal)
          })
          setProducts(misProductos)
      })
      .catch(err => console.log(err))
}, [id])

  // useEffect(() => {
  //   // // const db = getFirestore();

  //   customFetch(2000, productsJson, "C", category)
  //     .then((res) => setPostres(res))
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       setLoading(false);
  //     });

  // }, [category]);

  return (
    <>
      {/* {loading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <Container className="main-container">
          <ItemList products={products} />
        </Container>
      )} */}
      <Container className="main-container">
        <ItemList products={products} />
      </Container>
    </>
  );
}
