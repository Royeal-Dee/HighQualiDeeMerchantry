import React, { useState, useEffect } from "react";

import "../styles/Main.scss";

export default function Women() {
  // const [data, setData] = useState();
  const [womens, setWomens] = useState("");
  useEffect(() => {
    womensPage();
  }, []);

  const womensPage = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    const jsonData = await response.json();
    setWomens(jsonData);
  };
  return (
    <>
      <h2>HighQualiDee Women's</h2>
      <div className="main-container">
        {womens.map((value) => {
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
