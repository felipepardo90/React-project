import { faTrashAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormOrder from "../Firebase/FormOrder";
import { CartContext } from "./CartContext";
import "./_CartStyles.scss";



export default function Cart() {
  //CART CONTEXT

  const {
    cart,
    clear,
    removeItem,
    totalPerItem,
    subTotal,
    totalWithShipping,
    Shipping,
  } = useContext(CartContext);

  // MOSTRAR/OCULTAR MODAL

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModalForm = () => setIsOpenModal(true);

  return (
    <>
      <section className="container pt-5 mt-5">
        <h2 className="font-weight-bold pt-5">Carrito de compras</h2>
      </section>
      <section className="cart-container container my-5">
        <table width={"100%"}>
          <thead>
            <tr>
              <td>Remover</td>
              <td>Imagen</td>
              <td>Producto</td>
              <td>Precio</td>
              <td>Cantidad</td>
              <td>Total</td>
            </tr>
          </thead>
          {cart.length !== 0 &&
            cart.map((p) => {
              return (
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
                        className="table-image"
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
                      <h5>
                        $ {totalPerItem(parseInt(p.price), parseInt(p.count))}
                      </h5>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </section>{" "}
      {/* NO PRODUCTS */}
      {cart.length !== 0 || (
        <>
          <section>
            <div className="container p-5 mt-5 placeholder">
              <h1>Esto parece que está un poco vacío</h1>
              <p>¿No sabés qué comprar? seguí mirando nuestros productos</p>

              <Link to="/React-project">
                <Button>Volver al inicio</Button>
              </Link>
            </div>
          </section>
        </>
      )}

      {/* BOTTOM SECTION */}
      <section className="cart-bottom container">
        <Row>
          <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
            <div>
              <h5>CUPÓN</h5>
              <p>Si tienes un cupón, ingresalo aquí</p>
              <section className="check__btn">
                <input type="text" placeholder="código del cupón" />
                <Button variant="primary" className="check__btn">
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
                <p>$ {subTotal} </p>
              </div>
              <div className="d-flex justify-content-between">
                <section>
                  <h6>
                    Envío +12% <FontAwesomeIcon icon={faTruck} />
                  </h6>
                  <span
                    style={{ color: "black", opacity: ".5", fontSize: "12px" }}
                  >
                    (gratis para compras mayores a $3000)
                  </span>
                </section>
                {subTotal < 3000 ? <p>$ {Shipping}</p> : <p>Envío gratis</p>}
              </div>

              <hr className="second-hr" />
              <div className="d-flex justify-content-between">
                <h6>Total</h6>
                {subTotal < 3000 ? (
                  <p>$ {totalWithShipping}</p>
                ) : (
                  <p>$ {subTotal}</p>
                )}
              </div>

              <div className="check__btn">
                {cart.length > 0 ? (
                  <>
                    <Button
                      variant="primary"
                      className="ml-auto check__btn"
                      onClick={clear}
                    >
                      VACIAR CARRITO
                    </Button>
                    <Button
                      variant="primary"
                      className="ml-auto check__btn"
                      onClick={openModalForm}
                    >
                      COMPRAR
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="secondary"
                      className="ml-auto check__btn"
                      disabled
                    >
                      VACIAR CARRITO
                    </Button>
                    <Button
                      variant="secondary"
                      className="ml-auto check__btn"
                      disabled
                    >
                      COMPRAR
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Row>
      </section>
    

       {isOpenModal && <><FormOrder /> </>}
    </>
  );
}
