import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartProvider";
// import { CartData } from "../context/CartProvider";
import MoneyFormatter from "../MoneyFormatter";
import "../styles/Products.scss";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("all");
  const { addProduct, cart } = useContext(CartContext);
  // const { cart } = CartData();
  const formatter = MoneyFormatter;

  useEffect(() => {
    const url = searchTerm === "all" ? "" : `/category/${searchTerm}`;

    fetch("https://fakestoreapi.com/products" + url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.map((product) => {
            const exists = cart.find((prod) => prod.id === product.id);

            product.quantity = exists ? exists.quantity : 0;
            return product;
          })
        );
      })
      .catch((err) => console.error("Fetch Products Err: ", err));
  }, [searchTerm, cart]);

  return (
    <div className="products-page">
      <h1 className="header" style={{ fontSize: 70 }}>
        HighQualiDee Products
      </h1>
      <div className="button-container">
        <button
          className="filter-btns"
          onClick={() => {
            setSearchTerm("all");
          }}
        >
          All Products
        </button>
        <button
          className="filter-btns"
          onClick={() => {
            setSearchTerm("men's clothing");
          }}
        >
          HighQualiDee Men
        </button>
        <button
          className="filter-btns"
          onClick={() => {
            setSearchTerm("women's clothing");
          }}
        >
          HighQualiDee Women
        </button>
        <button
          className="filter-btns"
          onClick={() => {
            setSearchTerm("jewelery");
          }}
        >
          HighQualiDee Jewelery
        </button>
        <button
          className="filter-btns"
          onClick={() => {
            setSearchTerm("electronics");
          }}
        >
          HighQualiDee Electronics
        </button>
      </div>

      <div className="containers-for-all-products">
        {products.map((data) => {
          return (
            <div className="product" key={data.id}>
              <img
                src={data.image}
                alt="product-img"
                className="product-image"
              />

              <div className="product-description-container">
                <h2 className="product-price">{formatter(data.price)}</h2>
                <h4 className="product-name">{data.title}</h4>
                <h5 className="product-description">
                  {data.description.slice(0, 50) + "..."}
                </h5>
                <h5 className="product-category">{data.category}</h5>
                <h5 className="product-link">
                  <Link to={`/Products/${data.id}`}>See More Details</Link>
                </h5>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addProduct(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
