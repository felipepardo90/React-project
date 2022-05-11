import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import MadePurchase from "../MainContainer/MadePurchase";
import { CartContext } from "./CartContext";

const FormOrder = () => {

  //CART CONTEXT

  const { cart, clear, subTotal, totalWithShipping } = useContext(CartContext);
  //DATOS OBTENIDOS DE FORM

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [orderID, setOrderID] = useState();

  // MOSTRAR/OCULTAR MODAL

  const [openModal, setOpenModal] = useState(false);

  const openModalForm = () => setOpenModal(true);
  const closeModalForm = () => setOpenModal(false);

  //FUNCION PARA ENVIAR DATOS A FIRESTORE

  const sendOrder = () => {
    const order = {
      buyer: { name, lastname, phone, email, address },
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

  // VALIDACION FORM

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true)
    }else{
      sendOrder()
    }
    
  };

  console.log(orderID, "orderID");

  return (
    <>
      <Button
        variant="primary"
        className="ml-auto check__btn"
        onClick={openModalForm}
      >
        COMPRAR
      </Button>

      {orderID ? (
        <MadePurchase orderID={orderID} />
      ) : (
        <Modal show={openModal} onHide={closeModalForm}>
          <Modal.Header closeButton>
            <Modal.Title>Estás a punto de terminar tu compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Nombre/s</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="nombre/s"
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                  required
                />
                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="apellido"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.currentTarget.value);
                  }}
                  required
                />
                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="dirección"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.currentTarget.value);
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, escriba una dirección válida
                </Form.Control.Feedback>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="teléfono"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.currentTarget.value);
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  El teléfono proporcionado no es válido
                </Form.Control.Feedback>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, escriba una dirección correcta
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="secondary" onClick={closeModalForm}>
                Volver
              </Button>
              <Button
                type="submit"
                variant="primary"
              >
                Finalizar compra
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default FormOrder;
