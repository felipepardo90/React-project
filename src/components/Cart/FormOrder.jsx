import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const FormOrder = ({ data, settings }) => {

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
          <Modal.Title>¡Atención!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Está por finalizar su compra</h2>
          <p>Esperamos que pueda disfrutar nuestros productos, desde la comodidad de su hogar, con nuestros envíos a domicilio.</p>
          <p>Para ello, deberá completar el siguiente formulario. Sus datos no serán proporcionados a terceros.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={close}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container-form">
        <div className="form-box">
          <div className="image-box"></div>
          <div className="contact-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                settings.sendOrder();
              }}
            >
              <div className="mb-3">
                <label className="form-label">
                  Nombre/s
                </label>
                <input
                  className="form-control field"
                  type="text"
                  placeholder="Felipe"
                  value={data.name}
                  onChange={(e) => {
                    settings.setName(e.currentTarget.value);
                  }}
                  pattern="^([a-zA-Z ]){2,30}$"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Apellido
                </label>
                <input
                  className="form-control field"
                  type="text"
                  placeholder="Pardo"
                  value={data.lastname}
                  onChange={(e) => {
                    settings.setLastname(e.currentTarget.value);
                  }}
                  pattern="^([a-zA-Z ]){2,30}$"
                  required
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Correo
                </label>
                <input
                  className="form-control field"
                  type="text"
                  placeholder="ejemplo@ejemplo.com"
                  value={data.email}
                  onChange={(e) => {
                    settings.setEmail(e.currentTarget.value);
                  }}
                  pattern="[^@\s]+@[^@\s]+" 
                  required
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Dirección
                </label>
                <input
                  className="form-control field"
                  type="text"
                  placeholder="Avda Belgrano 2020"
                  value={data.address}
                  onChange={(e) => {
                    settings.setAddress(e.currentTarget.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Teléfono
                </label>
                <input
                  className="form-control field"
                  type="tel"
                  placeholder="000 000 0000"
                  value={data.phone}
                  onChange={(e) => {
                    settings.setPhone(e.currentTarget.value);
                  }}
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOrder;
