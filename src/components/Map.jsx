import React, { useState, useCallback } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: 19.4267261,
    lng: -99.1718706,
  };

const Map = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.API_KEY,
  });

    // const [map, setMap] = useState(null)

    // const onLoad = useCallback((map) => {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])

    // const onUnmount = useCallback(() => {
    //   setMap(null)
    // }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    //   onLoad={onLoad}
    //   onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <p>No Map</p>
  );
};

export default React.memo(Map);
