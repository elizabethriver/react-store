import React, {useContext} from 'react'
import AppConttext from '../Context/AppConttext';
import Map from "./Map";
import useGoogleAdress from "../hooks/useGoogleMaps";

const Success = () => {
    const {state: {buyer}} = useContext(AppConttext);
    const location = useGoogleAdress(buyer[0].address);
    console.log(location)
    return (
        <div>
           <h1>`{buyer[0].name}, thanks by your shopping`</h1>
           <span>Next, will you see a new contact</span> 
           <div>
               <Map data={location}>Google Maps</Map>
           </div>
        </div>
    )}



export default Success
