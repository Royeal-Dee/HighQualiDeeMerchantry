import React, { useState, useEffect } from "react";
import "../styles/Main.scss";

export default function Home() {
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fakestoreapi();
  }, []);

  const fakestoreapi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setProduct(jsonData);
  };
  return (
    <>
      <h2>HighQualiDee Merchantry</h2>
      <div className="main-container">
        {product.map((value) => {
          return (
            <>
              <div className="product-container">
                <div className="content-container">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
                <img src={value.image} alt=" "></img>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
