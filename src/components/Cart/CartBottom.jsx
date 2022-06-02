import { Button } from "react-bootstrap";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";


const CartBottom = () => {

    const {
        cart,
        clear,
        subTotal,
        totalWithShipping,
        Shipping,
      } = useContext(CartContext);

  return (
    <>
        <section className="cart-bottom container">
        <div className="row">
          <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
            <div>
              <h5>CUPÓN</h5>
              <p>Si tienes un cupón, ingresalo aquí</p>
              <section className="check__btn">
                <input type="text" placeholder="código del cupón" />
                <Button variant="warning">
                  VALIDAR
                </Button>
              </section>
            </div>
          </div>

          {/* CHECK OUT */}

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
                      variant="danger"
                      className="ml-auto check__btn"
                      onClick={clear}
                    >
                      VACIAR CARRITO
                    </Button>
                    <Link to="/checkout" style={{textDecoration:"none"}}><Button className="ml-auto check__btn" variant="warning" >COMPRAR</Button></Link>
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
        </div>
      </section>

    </>
  )
}

export default CartBottom