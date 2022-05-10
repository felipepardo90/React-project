import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MadePurchase({ orderID }) {
  
  const [purchaseMade, setPurchaseMade] = useState(false);

  const confirmed = () =>setPurchaseMade(true)
  const notConfirmed = () =>setPurchaseMade(false)
  return (
    <>
      <Button variant="primary" onClick={confirmed}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={purchaseMade}
        onHide={notConfirmed}
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
          <Button variant="secondary" onClick={notConfirmed}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MadePurchase;
