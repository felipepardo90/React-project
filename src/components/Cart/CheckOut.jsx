import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useContext, useState } from "react";
import MadePurchase from "../MainContainer/MadePurchase";
import { CartContext } from "./CartContext";
import FormOrder from "./FormOrder";

const CheckOut = () => {
  //CART CONTEXT

  const { cart, clear, subTotal, totalWithShipping } = useContext(CartContext);
  //DATOS OBTENIDOS DE FORM

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [orderID, setOrderID] = useState();

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

  const data = {
    name,
    lastname,
    email,
    phone,
    address,
  }
  const settings = {
    
    setName,
    setLastname,
    setEmail,
    setPhone,
    setAddress,
    sendOrder,
  };

  return (
    <>
      {orderID ? (
        <MadePurchase orderID={orderID} />
      ) : (
        <FormOrder settings={settings} data={data}/>
      )}
    </>
  );
};

export default CheckOut;
