import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Information = () => (
  <div>
    <h1>Information</h1>
    <div>
      <form action="">
        <input type="text" placeholder="Name" name="" />
        <input type="text" placeholder="email" name="" />
        <input type="text" placeholder="address" name="" />
        <input type="text" placeholder="apt" name="" />
        <input type="text" placeholder="city" name="" />
        <input type="text" placeholder="country" name="" />
        <input type="text" placeholder="state" name="" />
        <input type="text" placeholder="code" name="" />
        <input type="text" placeholder="number phone" name="" />
      </form>
      <div>
        <button type="button"> <ArrowBackIcon /></button>
        <Link to="/checkout/payment">
          <button type="button"> <ArrowForwardIcon /> Pay</button>
        </Link>
      </div>
      <div>
        <h3>Order Summary</h3>
        <h4>Item name</h4>
        <span>$10</span>
      </div>
    </div>
  </div>
);

export default Information;
