import React from 'react';
import Product from "./Product";

const Products = ({ props }) => 
  // console.log(props);
   (
    <div>
      <h1>Products</h1>
      <div>
        {props.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
;

export default Products;
