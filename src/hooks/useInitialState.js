/* eslint-disable no-undef */
import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const deleteItemProduct = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    addToCart,
    deleteItemProduct,
    state,
  };
};

export default useInitialState;

// //Connecter con API
// useEffect(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data.results);
//       products(data.results);
//     })
//     .catch((error) => console.log(error));
// }, [url]);

// return character;
