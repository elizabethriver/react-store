import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Header from "./components/Header";
// import Character from "./components/Character";
import Home from "../components/Home";
import Success from "../components/Success";
import Checkout from "../components/Checkout";
import Information from "../components/Information";
import NotFound from "../components/NotFound";
import Payment from "../components/Payment";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Router>
      <div>
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
        <Layout>
        <Switch>
          <Route path="/checkout/success" component={Success} />
          <Route path="/checkout/payment" component={Payment} />
          <Route path="/checkout/information" component={Information} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
        </Layout>
      </div>
    </Router>
  );
}
