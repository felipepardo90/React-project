import { useState, useEffect } from "react";
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
import Loading from "../utils/Loading";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
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
    }).catch((err) => console.log(err))
    .finally(
      setLoading(true)
    );
  }, [id, category]);

  return (
    <>
      {!loading?<Loading />:
      <Container className="main-container">
        <ItemList products={products} />
      </Container>}
    </>
  );
}