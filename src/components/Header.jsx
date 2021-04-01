import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AppConttext from '../Context/AppConttext';

const Header = () => {
  // console.log(props);
  const {
    state: { cart },
  } = useContext(AppConttext);
  // console.log(AppConttext);
  // console.log({products, addToCart } );
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/checkout/information">Information</Link>
        </li>
        <li>
          <Link to="/checkout/payment">Payment</Link>
        </li>
        <li>
          <Link to="/checkout/success">Success</Link>
        </li>
      </ul>
      <div>
        {cart.length > 0 ? (
          <div>
            <ShoppingBasketIcon />
            {cart.length}
          </div>
        ) : <ShoppingBasketIcon />
      }
      </div>
    </div>
  );
};

export default Header;
