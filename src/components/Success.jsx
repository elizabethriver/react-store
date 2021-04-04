import React, {useContext} from 'react'
import AppConttext from '../Context/AppConttext';
import Map from "./Map";

const Success = () => {
    const {state: {buyer}} = useContext(AppConttext);
    return (
        <div>
           <h1>`{buyer.name}, thanks by your shopping`</h1>
           <span>Next, will you see a new contact</span> 
           <div>
               <Map>Google Maps</Map>
           </div>
        </div>
    )}



export default Success
