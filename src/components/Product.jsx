import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/components/Product.css';

const Product = ({ product, handelAddToCart }) => (
  //   console.log(product);
  <div>
    <img className="image" src={product.image} alt="product of sell" />
    <h2>{product.title}</h2>
    <span> ${product.price} </span>
    <p>{product.description}</p>
    <button
      type="button"
      label="text"
      onClick={() => {
        handelAddToCart(product);
      }}
    >
      <ShoppingCartIcon />
    </button>
  </div>
);
export default Product;
