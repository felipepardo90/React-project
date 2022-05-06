import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));
  const clear = () => setCart([]);
  const quantity = cart.reduce((total, p) => total + p.count, 0);
  const totalPerItem = (price, count) => {
    return price * count;
  };

  const subTotal = cart.reduce(
    (acc, p) => acc + +p.count * parseInt(p.price),
    0
  );
  const Shipping = cart.reduce(
    (acc, p) => acc + +p.count * parseInt(p.price) * 0.12,
    0
  );


  const totalWithShipping = cart.reduce(
    (acc, p) => acc + +p.count * parseInt(p.price) * 1.12,
    0
  ).toFixed(2);

  const addItem = (item) => {
    const indexCart = cart.findIndex((p) => p.id === item.id);
    if (indexCart !== -1) {
      const newCart = [...cart];
      newCart[indexCart].count = newCart[indexCart].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const data = {
    cart,
    addItem,
    removeItem,
    clear,
    quantity,
    totalPerItem,
    subTotal,
    totalWithShipping,
    Shipping,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
