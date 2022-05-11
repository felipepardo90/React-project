import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MadePurchase({orderID}) {
  const [purchaseMade, setPurchaseMade] = useState(true);

  const close = () => setPurchaseMade(false);

  console.log(orderID, "orderID Made Purchase");
  return (
    <>
      <Modal
        show={purchaseMade}
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
