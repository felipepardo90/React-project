import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartProducts = () => {

    const {cart, removeItem, totalPerItem} = useContext(CartContext)

  return (
      <>
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
      </section>
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

      </>
  )
}

export default CartProducts