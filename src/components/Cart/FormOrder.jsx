import React from "react";

const FormOrder = ({ data, settings }) => {
  return (
    <>
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            settings.sendOrder();
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre/s
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="nombre/s"
              value={data.name}
              onChange={(e) => {
                settings.setName(e.currentTarget.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Apellido
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="apellido"
              value={data.lastname}
              onChange={(e) => {
                settings.setLastname(e.currentTarget.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ejemplo@ejemplo.com"
              value={data.email}
              onChange={(e) => {
                settings.setEmail(e.currentTarget.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Dirección
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="address"
              value={data.address}
              onChange={(e) => {
                settings.setAddress(e.currentTarget.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Teléfono
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="teléfono"
              value={data.phone}
              onChange={(e) => {
                settings.setPhone(e.currentTarget.value);
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormOrder;
