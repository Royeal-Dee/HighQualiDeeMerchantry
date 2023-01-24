import React from "react";
import { Link } from "react-router-dom";

import { CartData } from "../context/CartProvider";
import MoneyFormatter from "../MoneyFormatter";
import "../styles/Cart.scss";

export default function Cart() {
  const { cart, clearCart } = CartData();
  const formatter = MoneyFormatter;
  const { removeProduct } = CartData();

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
        {cart.length > 0 ? (
          <>
            {cart.map((product) => {
              return (
                <div key={product.id} className="product-wrapper">
                  <div className="individual-product">
                    <img
                      src={product.image}
                      alt="product-img"
                      className="product-image"
                    />

                    <div className="product-desc">
                      <h5 className="product-name">{product.title}</h5>
                      <h5 className="product-category">{product.category}</h5>
                      <h5>
                        <Link to={`/products/${product.id}`}>See details</Link>
                      </h5>
                    </div>

                    <div>
                      <h2>Quantity: {product.quantity}</h2>
                      <h2 className="product-price">
                        {formatter(product.price)}
                      </h2>
                      <div className="removeitem">
                        <button onClick={() => removeProduct(product.id)}>
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1>No products in cart</h1>
        )}
        <h1 className="price">Total: {formatter(cartTotal())}</h1>
        <button className="empty-btn" onClick={clearCart}>
          Empty Cart
        </button>
      </div>
    </div>
  );
}
