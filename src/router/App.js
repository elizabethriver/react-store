import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import Character from "./components/Character";
import Home from '../components/Home';
import Success from '../components/Success';
import Checkout from '../components/Checkout';
import Information from '../components/Information';
import NotFound from '../components/NotFound';
import Payment from '../components/Payment';
import Layout from '../components/Layout';
import '../styles/components/App.css';
import AppContext from '../Context/AppConttext';
import useInitialState from '../hooks/useInitialState';

export default function App() {
  const initialData = useInitialState();
  console.log(initialData);
  return (
    <AppContext.Provider value={initialData}>
      <Router>
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
      </Router>
    </AppContext.Provider>
  );
}
