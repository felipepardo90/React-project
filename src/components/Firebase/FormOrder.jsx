// import { addDoc, collection, getFirestore, setDoc } from "firebase/firestore";
import {  useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import { CartContext } from "../Navbar/CartContext";

const FormOrder = (total) => {

  // const {cart} = useContext(CartContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const sendOrder = () => {

  
  // const order = {
  //     buyer:{name, phone, email, address},
  //     items:cart, 
  //     total: 200
  // }
  
  // const db = getFirestore()
  // const ordersCollection = collection(db, "orders")
  //  addDoc(ordersCollection, order).then(({id})=>setDoc(id))
  
  
  //   return (
  //     <div>sendOrder</div>
  //   )
  // }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <>

    //   <input
    //     type={"text"}
    //     value={name}
    //     onChange={(e) => {
    //       setName(e.currentTarget.value);
    //     }}
    //   />

    //   <input
    //     type={"text"}
    //     value={email}
    //     onChange={(e) => {
    //       setEmail(e.currentTarget.value);
    //     }}
    //   />

    //   <input
    //     type={"text"}
    //     value={phone}
    //     onChange={(e) => {
    //         setPhone(e.currentTarget.value);
    //     }}
    //   />

    //   <button
    //     onClick={() => {
    //       finishOrder();
    //     }}
    //   >
    //     COMPRAR
    //   </button>
    // </>
  );
};

export default FormOrder;
