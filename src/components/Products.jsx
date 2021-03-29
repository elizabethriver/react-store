import React from 'react';

const Products = ({ props }) => {
  console.log(props);
  return (
    <div>
      <h1>Products</h1>
      <div>
        {props.map((player) => (
          <div key={player.id}>
            <p>{player.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
