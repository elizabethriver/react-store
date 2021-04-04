import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api';


const Map = ({data}) => {

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: data.lat,
    lng: data.lng,
  };
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
      zoom={10}
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
