// import React, { useContext } from 'react';
// import AppConttext from '../Context/AppConttext';

// const {
//     state: { cart },
//   } = useContext(AppConttext);

const handdleSumTotal = (cartData) => {
    // Esto es para transformar un array en su valor total
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const cartSum = cartData.reduce(reducer, 0);
    return cartSum;
  };

export default handdleSumTotal;