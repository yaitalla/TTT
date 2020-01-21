import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Markers from './Markers';
const google = {
    zoom: 8,
    LatLng: { lat: 10.800, lng: 106.644 }
};
const mapStyles = {
    width: '100%',
    height: '100%',
  };
const MyMap = () => {
    return (
        <Map
          google={google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 10.800, lng: 106.644 }}
        >
            <Markers/>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM'
  })(MyMap);