import { faTrashAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./_CartStyles.scss";

const checkBtn = {
  margin: "0 12px 20px 0",
  display: "flex",
  justifyContent: "flex-end",
};

export default function Cart() {
  const { cart, clear, removeItem } = useContext(CartContext)
  const total = [""]

  return (
    <>
      <section className="container pt-5 mt-5">
        <h2 className="font-weight-bold pt-5">Carrito de compras</h2>
      </section>
      <section className="cart-container container my-5">
        <table width={"100%"}>
          <thead>
            <tr>
              <td>Quitar</td>
              <td>Imagen</td>
              <td>Producto</td>
              <td>Precio</td>
              <td>Cantidad</td>
              <td>Total</td>
            </tr>
          </thead>
          {cart.length !== 0 ? (
            cart.map((p) => { 
              const subtotal = parseInt(p.count) * parseInt(p.price)
              total.push(subtotal)
            
              return(

              <tbody key={p.id}>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      aria-hidden="true"
                      className="trash-icon"
                      onClick={() => removeItem(p.id)}
                    />
                  </td>
                  <td>
                    <img
                      src={p.image}
                      alt="product"
                      style={{ borderRadius: "50%", border:"2px dashed #3e0595" }}
                    />
                  </td>
                  <td>
                    <h5>{p.name}</h5>
                  </td>
                  <td>
                    <h5>$AR {p.price}</h5>
                  </td>
                  <td>
                    <h5>{p.count}</h5>
                  </td>
                  <td>
                    <h5>$ {subtotal}</h5>
                  </td>
                </tr>
              </tbody>
            )})
          ) : (
            <>
              <section>
                <div className="container pt-5 mt-5 placeholder">
                  <h1>Esto parece que está un poco vacío</h1>
                  <p>¿No sabés qué comprar? seguí mirando nuestros productos</p>
                  <Button>
                    <Link to="/React-project">Volver al inicio</Link>
                  </Button>
                </div>
              </section>
            </>
          )}
        </table>
      </section>{" "}
      
      <section className="cart-bottom container">
        <Row>
          <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
            <div>
              <h5>CUPÓN</h5>
              <p>Si tienes un cupón, ingresalo aquí</p>
              <section style={checkBtn}>
                <input type="text" placeholder="código del cupón" />
                <Button variant="primary" style={checkBtn}>
                  VALIDAR
                </Button>
              </section>
            </div>
          </div>

          <div className="total col-lg-6 col-md-6 col-12">
            <div>
              <h5>DETALLE TOTAL</h5>
              <div className="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <p>---{total.reduce((prev, next) => (+prev) + (+next))}---</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>
                  Envío <FontAwesomeIcon icon={faTruck} />
                </h6>
                <p>---envío---</p>
              </div>

              <hr className="second-hr" />
              <div className="d-flex justify-content-between">
                <h6>Total</h6>
                <p>---{total.reduce((prev, next) => (+prev) + (+next))}---</p>
              </div>

              <div style={checkBtn}>
                <Button
                  variant="primary"
                  style={checkBtn}
                  className="ml-auto"
                  onClick={clear}
                >
                  VACIAR CARRITO
                </Button>
                <Button
                  variant="primary"
                  style={checkBtn}
                  className="ml-auto"
                  onClick={clear}
                >
                  COMPRAR
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </section>
    </>
  );
}
