import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MadePurchase({ orderID }) {
  const [openModal, setOpenModal] = useState(true);
  const close = () => setOpenModal(false);

  return (
    <>
      <Modal
        show={openModal}
        onHide={close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>¡FELICITACIONES!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Acaba de finalizar su compra</p>
          <p>Orden de compra: {orderID} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MadePurchase;
