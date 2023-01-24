// import React, { useState, useEffect } from "react";
import "../styles/Home.scss";
import image from "../images/anders-jilden-AkUR27wtaxs-unsplash.jpg";

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>HighQualiDee Merchantry</h1>
        <h2>Conspicuous Consumption</h2>
        <h5>
          <i>Enhanced Attraction for Whom Status is Important</i>
        </h5>
      </div>

      <div className="page-image-container">
        <img src={image} alt="Baker Miller Pink Landscape" />
      </div>
    </div>
  );
}
//export default function Home() {
//   const [product, setProduct] = useState([]);
//   console.log(product);
//   useEffect(() => {
//     fakestoreapi();
//   }, []);

//   const fakestoreapi = async () => {
//     const response = await fetch("https://fakestoreapi.com/products?limit=5");
//     const jsonData = await response.json();
//     setProduct(jsonData);
//   };
//   return (
//     <>
//       <h1>HighQualiDee Merchantry</h>
//       <div className="main-container">
//         {product.map((value) => {
//           return (
//             <>
//               <div className="product-container">
//                 <div className="content-container">
//                   <h3>{value.title}</h3>
//                   <p>{value.description}</p>
//                 </div>
//                 <img src={value.image} alt=" "></img>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }
