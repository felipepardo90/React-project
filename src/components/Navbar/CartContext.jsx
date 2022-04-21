import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  const clear = () => setCart([]);
  const addItem = (item) => {
    const indexCart = cart.findIndex( p => p.id === item.id);
    console.log(indexCart)
    if (indexCart !== -1) {
      const newCart = [...cart];
      newCart[indexCart].count = newCart[indexCart].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }

  };
  

  const data = { cart, addItem, removeItem, clear };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
