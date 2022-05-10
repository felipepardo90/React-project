import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      .finally(setLoading(true));
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail products={items} />
      )}
    </>
  );
}
