import React from "react";
import { Link } from "react-router-dom";

import { CartData } from "../context/CartProvider";
import MoneyFormatter from "../MoneyFormatter";
import "../styles/Cart.scss";

export default function Cart() {
  const { cart, clearCart } = CartData();
  const formatter = MoneyFormatter;

  // useEffect(() => {
  //   cartGetAll();
  // }, [cart, clearCart]);

  // const cartGetAll = async () => {
  //   fetch("https://fakestoreapi.com/carts")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   return (
  //     <div
  //       style={{
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <h2>HighQualiDee Purchase</h2>

  //       {cart.length > 0 ? (
  //         <>
  //           {cart.map((product) => {
  //             return (
  //               <div key={product.id}>
  //                 <h3>{product.name}</h3>
  //                 <p>{product.price}</p>
  //               </div>
  //             );
  //           })}
  //           {/* <h1>Total: {total}</h1> */}
  //         </>
  //       ) : (
  //         <h1>No products in cart</h1>
  //       )}
  //     </div>
  //   );
  // };

  function cartTotal() {
    const totals = [];
    if (cart.length > 0) {
      cart.forEach((product) => {
        totals.push(product.price * product.quantity);
      });
      return totals.reduce((prev, current) => prev + current, 0);
    }
    return false;
  }

  return (
    <div className="cart-page-container">
      <div className="header">
        <h1>Cart</h1>
      </div>

      <div className="user-cart">
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <div className="individual-product">
                <img
                  src={product.image}
                  alt="product-img"
                  className="product-image"
                />

                <div className="product-description-container">
                  <h5 className="product-name">{product.title}</h5>
                  <h5 className="product-category">{product.category}</h5>
                  <h5>
                    <Link to={`/products/${product.id}`}>See details</Link>
                  </h5>
                </div>

                <div>
                  <h2>Quantity: {product.quantity}</h2>
                  <h2 className="product-price">{formatter(product.price)}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="header">Total: {formatter(cartTotal())}</h1>
      <button className="empty-btn" onClick={clearCart}>
        Empty Cart
      </button>
    </div>
  );
}
