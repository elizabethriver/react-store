import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import PaymentIcon from '@material-ui/icons/Payment';
import { PayPalButton } from 'react-paypal-button';
import AppConttext from '../Context/AppConttext';
import handdleSumTotal from '../utils';
import HelmetComponent from './Helmet';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppConttext);
  const history = useHistory();
  const paypalOptions = {
    clientId: process.env.REACT_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  // const handdleSumTotal = () => {
  //   // Esto es para transformar un array en su valor total
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;
  //   const cartSum = cart.reduce(reducer, 0);
  //   console.log(cartSum, 'aqui');
  //   return cartSum;
  // };
  const handlerPaymentSucess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const order = {
        buyer,
        products: { cart },
        payment: data,
      };
      addNewOrder(order);
      history.push('./success');
    }
  };
  return (
    <div>
      <HelmetComponent
        title="React-Store"
        description="payment"
        descriptionContent="Payment information"
      />
      <h1>Resume of cart</h1>
      {cart.map((item) => (
        <div>
          <h1>{item.title} </h1>
          <span>${item.price} </span>
        </div>
      ))}
      <div>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handdleSumTotal(cart)}
          onPaymentStart={() => console.log('Start')}
          onPaymentSuccess={(data) => handlerPaymentSucess(data)}
          onPaymentError={(error) => console.error(error)}
          onPaymentCancel={(data) => console.log(data)}
        />
      </div>
      {/* <button type="button" label="text">
        <PaymentIcon /> Pay{' '}
      </button> */}
    </div>
  );
};

export default Payment;
