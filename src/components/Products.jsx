import React, {useContext} from 'react';
import Product from "./Product";
import AppConttext from "../Context/AppConttext";

const Products = () => {
  // console.log(props);
  const {state: {products}, addToCart } = useContext(AppConttext);
  // console.log(AppConttext);
  // console.log({products, addToCart } );
  const handelAddToCart = (product) => {
    addToCart(product);
    console.log('comprar')
  }
   return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} handelAddToCart={handelAddToCart}/>
        ))}
      </div>
    </div>
  )}
;

export default Products;
