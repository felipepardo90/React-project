import { faCopy, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_ItemListContainer.scss";
function MadePurchase({ orderID }) {
  const [openModal, setOpenModal] = useState(true);
  const [ticket, setTicket] = useState({});
  const [buyer, setBuyer] = useState({});
  const [items, setItems] = useState([]);
  const close = () => setOpenModal(false);

  useEffect(() => {
    const db = getFirestore();
    const ticketRef = doc(db, "tickets", orderID);
    getDoc(ticketRef).then((res) => {
      setTicket({ id: res.id, ...res.data() });
      setBuyer(res.data().buyer);
      setItems(res.data().items);
    });
  }, [orderID, ticket]);

  const shipping = items.reduce(
    (acc, p) => acc + +p.count * parseInt(p.price) * 0.12,
    0
  );
  const subtotal = items.reduce(
    (acc, p) => acc + +p.count * parseInt(p.price),
    0
  );
  const total = items
    .reduce((acc, p) => acc + +p.count * parseInt(p.price) * 1.12, 0)
    .toFixed(2);

  return (
    <>
      <Modal show={openModal} onHide={close} backdrop="static" keyboard={false}>
        <Modal.Header style={{ background: "#ce2f9b", color:"white"}}>
          <Modal.Title>
            ¡FELICITACIONES! {buyer.name}
            <p>Acaba de finalizar su compra</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "pink" }}>
          <div className="col-25">
            <div className="container">
              <h3>Resumen de compra</h3>
              <table width={"100%"}>
                <thead>
                  <tr>
                    <td>Producto</td>
                    <td>Precio xUnidad</td>
                    <td>Subtotal</td>
                  </tr>
                </thead>
                {items.length > 0 &&
                  items.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td>
                          <Link
                            to={`/item/${item.id}`}
                            className="ticket-total"
                            style={{
                              textTransform: "Capitalize",
                              textDecoration: "none",
                              color: "white",
                              textShadow: "1px 1px 2px #000",
                            }}
                          >
                            {item.name} x{item.count}
                          </Link>
                        </td>
                        <td>$ {item.price}</td>
                        <td>${item.price * item.count}</td>
                      </tr>
                    </tbody>
                  ))}
              </table>
              <br style={{ color: "black" }} />
              <p className="ticket-total">
                Envío
                <span className="span-ticket">
                  {subtotal > 3000 ? "Envío gratis" : shipping}
                </span>
              </p>
              <p className="ticket-total">
                Total
                <span className="span-ticket">
                  {subtotal > 3000 ? subtotal : total}
                </span>
              </p>
              <div>
                <p>Orden de compra: {orderID} <FontAwesomeIcon icon={faCopy} style={{cursor:"pointer", color:"white"}} className="copy-icon" /> </p>
                
              </div>
              <p>Muchas gracias por ser nuestro cliente favorito</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer style={{ background: "#ce2f9b" }}>
          <Button variant="primary">
            <FontAwesomeIcon icon={faPrint} />
          </Button>
          <Link to="/">
            <Button variant="primary">Inicio</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MadePurchase;
