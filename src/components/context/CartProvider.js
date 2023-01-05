import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}

export function addProduct(product) {
  setCart((c) => [...c, product]);
}

export function clearCart() {
  setCart([]);
  if (window.confirm("Are you sure you want to remove your cart items?")) {
    const cartState = {
      cart,
      addProduct,
      clearCart,
    };

    console.log(cartState);
  }
}
