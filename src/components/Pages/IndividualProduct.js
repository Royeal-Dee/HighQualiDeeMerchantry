import { useEffect, useState, useContext } from "react";

import "../styles/IndividualProduct.scss";
import { CartData } from "../context/CartProvider";
import MoneyFormatter from "../MoneyFormatter";

export default function IndividualProduct(props) {
  const [productDetails, setProductDetails] = useState({});
  const { addProduct, cart, isInCart } = CartData();
  const formatter = MoneyFormatter;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isInCart(data)) {
          data.quantity = cart.find((prod) => prod.id === data.id).quantity;
        } else {
          data.quantity = 0;
        }

        setProductDetails(data);
      })
      .catch((err) => console.error("Fetch Individual Product Err: ", err));
  }, [cart, isInCart, props.match.params.id]);

  return (
    <div className="individual-product-page">
      <h1 className="product-name">{productDetails.title}</h1>
      <div className="product">
        img src={productDetails.image} alt="product-img"
        <div className="product-image" />
        <div className="product-description-container">
          <h5 className="product-price">{formatter(productDetails.price)}</h5>
          <h5 className="product-description">{productDetails.description}</h5>
          <h5 className="product-category">{productDetails.category}</h5>
          <button
            className="add-to-cart-btn"
            onClick={() => addProduct(productDetails)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
