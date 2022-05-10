
import CartBottom from "./CartBottom";
import CartProducts from "./CartProducts";
import "./_CartStyles.scss";



export default function Cart() {


  return (
    <>
      <section className="container pt-5 mt-5">
        <h2 className="font-weight-bold pt-5 cart__title">Carrito de compras</h2>
      </section>
      <CartProducts />
      {/* BOTTOM SECTION */}
      <CartBottom />
    
    </>
  );
}
