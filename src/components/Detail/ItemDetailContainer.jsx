import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const detailRef = doc(db, "products", id);
    getDoc(detailRef)
      .then((res) => {
        setItems({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail products={items} />
      )}
    </>
  );
}
