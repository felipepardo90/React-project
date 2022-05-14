import React, { useState } from "react";
import "./_DetailStyles.scss";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ products }) {
  const [index, setIndex] = useState(0);

  const addOn = (index) => {
    setIndex(index);
  };

  return (
    <section key={products.id} className="container detail my-5 pt-5">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-12">
          <img
            src={products.image}
            alt={products.name}
            className="img__pic w-100"
          />
        </div>
        <div className="detail__body col-lg-6 col-md-12 col-12">
          <h6 className="py-2"
            style={{
              opacity: ".4",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {" "}
            Home / {products.category}
          </h6>
          <h1 className="py-4">{products.name}</h1>
          <h4 className="py-2">$AR {products.price}</h4>
          <section>
            {index === 0 ? (
              <ItemCount
                stock={products.stock}
                initial={1}
                products={products}
                addOn={addOn}
              />
            ) : (
              <>
                <section className="py-4">
                  <h4>
                    Has añadido {products.name} a tu carrito. ¿Deseas continuar
                    con la compra?
                  </h4>
                  <Link to="/cart">
                    <button>Terminar mi compra</button>
                  </Link>
                  <Link to="/React-project">
                    <button>Seguir navegando</button>
                  </Link>
                </section>
              </>
            )}
          </section>
          <span className="mt-5 mb-5">
            {products.description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
            harum blanditiis distinctio ab praesentium, dolor eum expedita
            ducimus molestias quisquam dignissimos voluptas facilis, ipsum
            doloremque nihil odit cupiditate. Ullam!
          </span>
        </div>
      </div>
    </section>
  );
}
