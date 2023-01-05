import React, { useState, useEffect } from "react";

import "..//..//styles/main.css";

export default function Women() {
  const [electronics, setElectronics] = useState([]);
  console.log(electronics);
  useEffect(() => {
    electronicsPage();
  }, []);

  const electronicsPage = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const jsonData = await response.json();
    setElectronics(jsonData);
  };
  return (
    <>
      <h2>HighQualiDee Electronics</h2>
      <div className="main-container">
        {electronics.map((value) => {
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
