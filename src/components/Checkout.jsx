import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AppConttext from '../Context/AppConttext';
import handdleSumTotal from '../utils';
import HelmetComponent from './Helmet';

const Checkout = () => {
  const {
    state: { cart },
    deleteItemProduct,
  } = useContext(AppConttext);
  console.log({ cart });
  const removeItem = (product) => {
    deleteItemProduct(product);
  };
  // const handdleSumTotal = () => {
  //   // Esto es para transformar un array en su valor total
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  //   const cartSum = cart.reduce(reducer, 0);
  //   console.log(cartSum, 'aqui');
  //   return cartSum;
  // };
  return (
    <div>
      <HelmetComponent
        title="React-Store"
        description="checkout"
        descriptionContent="Checkout Products"
      />
      <h3>List of petitions</h3>
      {cart.length !== 0 ? <h1>List of card</h1> : <h1>Not added products</h1>}
      {cart.map((item) => (
        <div className="Main" key={item.id}>
          <h1>{item.title}</h1>
          <span>${item.price}</span>
          <button
            type="button"
            onClick={() => {
              removeItem(item);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ))}
      <div>
        <h3>{`Price total: $ ${handdleSumTotal(cart)}`}</h3>
        <Link to="/checkout/information">
          <button type="button" label="text">
            <ArrowForwardIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
