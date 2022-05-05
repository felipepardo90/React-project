import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function MadePurchase() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const detailRef = doc(db, "tickets", id);
    getDoc(detailRef).then((res) => {
      setProducts({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <>
      {products.map((product) => (
        <section>
          <div className="container pt-5 mt-5 placeholder">
            <h1>¡FELICITACIONES!</h1>
            <p>Acaba de finalizar su compra</p>
            <p>Su número de ticket es {product.id}</p>

            <Link to="/React-project">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        </section>
      ))}
    </>
  );
}

export default MadePurchase;
