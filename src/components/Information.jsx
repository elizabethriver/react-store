import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AppConttext from '../Context/AppConttext';
import HelmetComponent from './Helmet';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppConttext);
  // console.log({ cart });
  const form = useRef(null);
  // console.log(form);
  const history = useHistory();
  const handleSudmit = () => {
    // create a form
    const formData = new FormData(form.current);
    // console.log(formData)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apt: formData.get('apt'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      code: formData.get('code'),
      phone: formData.get('phone'),
    };
    console.log(buyer);
    // send data to another url
    addToBuyer(buyer);
    history.push('./payment');
  };
  return (
    <div>
      <HelmetComponent
        title="React-Store"
        description="information"
        descriptionContent="Checkout information"
      />
      <h1>Information</h1>
      <div>
        <form ref={form}>
          <input type="name" placeholder="Name" name="name" />
          <input type="email" placeholder="email" name="email" />
          <input type="address" placeholder="address" name="address" />
          <input type="text" placeholder="apt" name="apt" />
          <input type="text" placeholder="city" name="city" />
          <input type="text" placeholder="country" name="country" />
          <input type="text" placeholder="state" name="state" />
          <input type="text" placeholder="code" name="code" />
          <input type="tel" placeholder="number phone" name="phone" />
        </form>
        <div>
          <Link to="/checkout">
            <button type="button">
              {' '}
              <ArrowBackIcon />
            </button>
          </Link>
          {/* <Link to="/checkout/payment"> */}
          <button type="button" onClick={() => handleSudmit()}>
            {' '}
            <ArrowForwardIcon /> Pay
          </button>
          {/* </Link> */}
        </div>
        <div>
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div>
              {' '}
              key={item.title}
              <h4>{item.name}</h4>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
