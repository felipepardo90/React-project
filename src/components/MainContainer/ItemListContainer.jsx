import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
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
  // const [loading, setLoading] = useState(true);
  const { id, category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productsRef = collection(db, "products");
    let q;

    if (!id) q = getDocs(productsRef);
    if (category)
      q = getDocs(query(productsRef, where("category", "==", category)));

    q.then((res) => {
      const documents = res.docs;
      let myProducts = [];

      documents.forEach((producto) => {
        const finalQuery = {
          id: producto.id,
          ...producto.data(),
        };
        myProducts.push(finalQuery);
      });
      setProducts(myProducts);
    }).catch((err) => console.log(err));
  }, [category, id]);

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
