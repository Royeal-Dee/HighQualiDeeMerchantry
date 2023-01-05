import React, { useState, useEffect } from "react";

import "..//..//styles/main.css";

export default function Jewelery() {
  const [jewelery, setJewelery] = useState([]);
  console.log(jewelery);
  useEffect(() => {
    jeweleryPage();
  }, []);

  const jeweleryPage = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const jsonData = await response.json();
    setJewelery(jsonData);
  };
  return (
    <>
      <h2>HighQualiDee Jewelery</h2>
      <div className="main-container">
        {jewelery.map((value) => {
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
