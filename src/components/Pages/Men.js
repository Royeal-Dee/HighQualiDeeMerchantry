import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartProvider";

import "..//..//styles/main.css";

export default function Men() {
  const [mens, setMens] = useState([]);
  const { clearCart, addProduct } = useContext(CartContext);
  console.log(mens);

  const mensPage = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    const jsonData = await response.json();
    setMens(jsonData);
  };

  const displayProducts = mens.map((value) => {
    return (
      <>
        <div className="product-container">
          <div className="content-container">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
          <img src={value.image} alt=" "></img>
        </div>
        <button onclick={() => addProduct(value)}>Add to cart</button>
      </>
    );
  });

  useEffect(() => {
    mensPage();
  }, []);

  useEffect(() => {
    console.log("mens json : ", mens);
  }, [mens]);
  return (
    <>
      <h2>HighQualiDee Men's </h2>
      <div className="main-container">{displayProducts}</div>
    </>
  );
}
