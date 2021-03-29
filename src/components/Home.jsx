import React from 'react'
import initialState from "../initialState";
import Products from "./Products";

const Home = () => {
    console.log(initialState);
    return (
        <div>
            <Products props={initialState.products} />
        </div>
    )}


export default Home


