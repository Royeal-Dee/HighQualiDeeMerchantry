import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { CartData } from "../context/CartProvider";
import MoneyFormatter from "../MoneyFormatter";
import "../styles/Cart.scss";

export default function Cart() {
  const { cart, clearCart } = CartData();
  const formatter = MoneyFormatter;

  useEffect(() => {
    CartGetAll();
  }, [cart, clearCart]);

  function cartTotal() {
    const totals = [];
    if (cart.length > 0) {
      cart.forEach((Products) => {
        totals.push(Products[0].price * Products[1].quantity);
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
        {cart.map((data) => {
          return (
            <div key={data[0].id}>
              <div className="individual-product">
                <img
                  src={data[0].image}
                  alt="product-img"
                  className="product-image"
                />

                <div className="product-description-container">
                  <h5 className="product-name">{data[0].title}</h5>
                  <h5 className="product-description">{data[0].description}</h5>
                  <h5 className="product-category">{data[0].category}</h5>
                  <h5>
                    <Link to={`/products/${data[0].id}`}>See details</Link>
                  </h5>
                </div>

                <div>
                  <h2>Quantity: {data[1].quantity}</h2>
                  <h2 className="product-price">{formatter(data[0].price)}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="header">Total: {formatter(cartTotal())}</h1>
      <button className="empty-btn" onClick={() => clearCart()}>
        Empty Cart
      </button>
    </div>
  );
}

const CartGetAll = async () => {
  fetch("https://fakestoreapi.com/carts")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>HighQualiDee Purchase</h2>

      {Cart.length > 0 ? (
        <>
          {Cart.map((product) => {
            return (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            );
          })}
          {/* <h1>Total: {total}</h1> */}
        </>
      ) : (
        <h1>No products in cart</h1>
      )}
    </div>
  );
};
