import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAdress = (address) => {
    const [map, setMap] = useState({});
    const API_KEY_MAP = process.env.API_KEY;
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY_MAP}`;
    console.log(API)
    useEffect(
       async () => {
        const response = await axios(API);
        console.log(response, 'axios');
        setMap(response.data.results[0].geometry.location)
    }, []);
    return map;
};

export default useGoogleAdress;
