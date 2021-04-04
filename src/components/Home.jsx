import React from 'react';
import initialState from '../initialState';
import Products from './Products';
import HelmetComponent from "./Helmet";

const Home = () => {
  console.log(initialState);
  return (
    <div>
      <HelmetComponent title="React-Store" description='home' descriptionContent="Home Products"/>
      <Products props={initialState.products} />
    </div>
  );
};

export default Home;
