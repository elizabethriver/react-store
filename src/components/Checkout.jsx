import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Checkout = () => (
  <div>
    <div>
      <h3>List of petitions</h3>
      <h1>Item name</h1>
      <span>$10</span>
    </div>
    <button type="button">
      <DeleteIcon />
    </button>
    <div>
      <h3>Price total: $10</h3>
      <Link to="/checkout/information">
        <button type="button" label="text"><ArrowForwardIcon /></button>
      </Link>
    </div>
  </div>
);

export default Checkout;
