import { useEffect, useState } from "react";

import "../styles/IndividualProduct.scss";
import { CartData } from "../context/CartProvider";
import MoneyFormatter from "../MoneyFormatter";

export default function IndividualProduct(props) {
  const { addProduct } = CartData();
  const formatter = MoneyFormatter;
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (isInCart(data)) {
  //         data.quantity = cart.find((prod) => prod.id === data.id).quantity;
  //       } else {
  //         data.quantity = 0;
  //       }

  //       setProductDetails(data);
  //     })
  //     .catch((err) => console.error("Fetch Individual Product Err: ", err));
  // }, [cart, isInCart, props.match.params.id]);

  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log("Fetch single product error", err));
  }, [props]);

  return (
    <div className="individual-product-page">
      <h1 className="product-name">{item.title}</h1>
      <div className="product">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="product-description-container">
          <h5 className="product-price">{formatter(item.price)}</h5>
          <h5 className="product-description">{item.description}</h5>
          <h5 className="product-category">{item.category}</h5>
          <button className="add-to-cart-btn" onClick={() => addProduct(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
