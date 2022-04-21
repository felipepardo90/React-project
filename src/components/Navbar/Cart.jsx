import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import {CartContext} from './CartContext'
import './_CartStyles.scss'

const checkBtn = {
    margin: "0 12px 20px 0",
    display: "flex",
    justifyContent: "flex-end"
}

export default function Cart() {
  const data = useContext(CartContext)

  console.log(data)

  return (
    <>
      <section className="container pt-5 mt-5">
        <h2 className="font-weight-bold pt-5">Shopping Cart</h2>
      </section>

      <section className="cart-container container my-5">
        <table width={"100%"}>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>

         
         <tbody>
            <tr>
              <td><FontAwesomeIcon icon={faTrashAlt} className="trash-icon" onClick={data.removeItem} /></td>
              <td><img src={data.image} alt="product" /></td>
              <td><h5>{data.name}</h5></td>
              <td><h5>{data.price}</h5></td>
              <td><h5>{data.quantity}</h5></td>
              <td><h5>TOTAL</h5></td>
            </tr>
          </tbody>



        </table>
      </section>

<section className="cart-bottom container">
  <Row>
    <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
      <div>
        <h5>COUPON</h5>
        <p>If you have a coupon, enter here</p>
        <input type="text" placeholder="coupon code" />
        <Button variant="primary">APPLY COUPON</Button>
      </div>
    </div>

    <div className="total col-lg-6 col-md-6 col-12">
      <div>
        <h5>CART TOTAL</h5>
        <div className="d-flex justify-content-between">
          <h6>Subtotal</h6>
          <p>---subtotal---</p>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Shipping</h6>
          <p>---shipping---</p>
        </div>

        <hr className="second-hr"/>
        <div className="d-flex justify-content-between">
          <h6>Total</h6>
          <p>---total---</p>
        </div>
        
        <Button variant="primary" style={checkBtn} className="ml-auto">PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  </Row>
</section>

    </>
  );
}
