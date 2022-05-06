
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MadePurchase(props) {


  return (
    <>
      
        <section>
          <div className="container pt-5 mt-5 placeholder">
            <h1>¡FELICITACIONES!</h1>
            <p>Acaba de finalizar su compra</p>
            <p>Su número de ticket es {props.orderID} </p>

            <Link to="/React-project">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        </section>
    </>
  );
}

export default MadePurchase;
