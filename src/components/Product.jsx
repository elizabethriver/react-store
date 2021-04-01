import React from 'react';
import "../styles/components/Product.css";

const Product = ({ product }) => 
//   console.log(product);
   (
      <div>
        <img className="image" src={product.image} alt="product of sell"/>
        <h2>{product.title}</h2>
        <span> ${product.price} </span>
        <p>{product.description}</p>
        <button type="button">buy</button>
      </div>
  )
;

export default Product;