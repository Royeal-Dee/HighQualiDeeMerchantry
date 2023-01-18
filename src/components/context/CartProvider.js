import { useState, createContext, useEffect, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isInCart, setIsInCart] = useState(false);
  const [exists, setExists] = useState(false);
  const [cart, setCart] = useState([]);

  // function isInCart(product) {
  //   setExists(cart.find((prod) => prod.id === product.id));

  //   return exists ? true : false;
  // }

  function findProduct(product) {
    if (isInCart(product)) {
      return {
        idx: cart.findIndex((prod) => prod.id === product.id),
        item: cart[this.idx],
      };
    }
  }

  const clearCart = () => {
    setCart([]);
  };

  const addProduct = (product) => {
    const exists = cart.find((prod) => prod.id === product.id);
    product.quantity += 1;

    if (exists) {
      setCart((previous) => {
        const newCart = previous.filter((item) => item.id !== product.id);

        return [...newCart, { ...product }];
      });
    } else {
      setCart((c) => [...c, { ...product }]);
    }

    // const cartCopy = [...cart];
    // const exists = cartCopy.find((item) => item.id === product.id);

    // if (exists) {
    //   const productIdx = cartCopy.findIndex((prod) => prod.id === product.id);
    //   setCart(cartCopy);
    //   console.log(productIdx);
    // } else {
    // }

    // cartCopy.forEach((item, idx) => {
    //   if (item[0] === product) {
    //     setExists(true);
    //     cartCopy[idx][1].quantity = cartCopy[idx][1].quantity + 1;
    //   }
    // });

    // if (exists) {
    // } else {
    //   setCart((c) => [...c, [product, { quantity: 1 }]]);
    // }
    // return console.log("addProduct");
  };

  function removeProduct(id) {
    setCart((c) => c.filter((item) => item.id !== id));

    // if (window.confirm("Delete from cart?")) {
    //   setCart([]);
    // }
  }

  useEffect(() => {
    console.log("Cart:", cart);
  }, [cart]);

  const cartState = {
    cart,
    setCart,
    addProduct,
    // clearCart,
    // isInCart,
    // findProduct,
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, removeProduct, addProduct, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const CartData = () => {
  return useContext(CartContext);
};
