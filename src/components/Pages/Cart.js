import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";

import "..//..//styles/main.css";

export default function Cart() {
  const { cart, total } = useContext(CartContext);
  useEffect(() => {
    CartGetAll();
  }, []);

  const CartGetAll = async () => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>HighQualiDee Purchase</h2>

      {cart.length > 0 ? (
        <>
          {cart.map((product) => {
            return (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            );
          })}
          <h1>Total: {total}</h1>
        </>
      ) : (
        <h1>No products in cart</h1>
      )}
    </div>
  );
}
