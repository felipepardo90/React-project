import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import MadePurchase from "../MainContainer/MadePurchase";
import { CartContext } from "../Navbar/CartContext";

const FormOrder = () => {
  // // FORM HOOK -
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

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
    }

    setValidated(true);
  };

  return (
    <>
      <Button variant="primary" className="ml-auto check__btn" onClick={openModalForm}>
        COMPRAR
      </Button>


      <Modal show={openModal} onHide={closeModalForm}>
        <Modal.Header closeButton>
          <Modal.Title>Estás a punto de terminar tu compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Nombre/s</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="nombre/s"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
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
                type="text"
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalForm}>
            Volver
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              sendOrder();
              closeModalForm();
            }}
          >
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormOrder;
