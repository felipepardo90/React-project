import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import productsJson from "../utils/products.json";
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
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productsRef;
    !id
      ? (productsRef = collection(db, "products"))
      : (productsRef = query(
          collection(db, "products"),
          where("category", "==", id)
        ));

    getDocs(productsRef).then((res) => {
      setProducts(res.docs.map((p) => ({ id: p.id, ...p.data() })));
    });
    
  }, []);

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
