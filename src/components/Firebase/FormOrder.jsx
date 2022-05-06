
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import {  useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import MadePurchase from "../MainContainer/MadePurchase";
import { CartContext } from "../Navbar/CartContext";

const FormOrder = () => {
  //CART CONTEXT

  const {
    cart,
    clear,
    subTotal,
    totalWithShipping,
  } = useContext(CartContext);
  //DATOS OBTENIDOS DE FORM

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderID, setOrderID] = useState();

  // MOSTRAR/OCULTAR MODAL

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FUNCION PARA ENVIAR DATOS A FIRESTORE

  const sendOrder = () => {
    const order = {
      buyer: { name, phone, email, address },
      items: cart,
      date: serverTimestamp(),
      total: subTotal < 3000 ? totalWithShipping : subTotal,
    };

    const db = getFirestore();
    const orderRef = collection(db, "tickets");
    addDoc(orderRef, order).then(({ id }) => {
      setOrderID(id);
      clear();
    });
  };



  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estás a punto de terminar tu compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre y apellido"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="dirección"
                value={address}
                onChange={(e) => {
                  setAddress(e.currentTarget.value);
                }}
              />
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="teléfono"
                value={phone}
                onChange={(e) => {
                  setPhone(e.currentTarget.value);
                }}
              />
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="ejemplo@ejemplo.com"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              sendOrder();
              handleClose();
            }}
          >
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
      {orderID && <MadePurchase orderID={orderID} />}
    </>
  );
};

export default FormOrder;
