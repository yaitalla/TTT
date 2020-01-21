import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Markers from './Markers';

const MyMapUpdated = () => {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM"
      >
        <GoogleMap 
            defaultZoom={12} 
            id='example-map'
            defaultCenter={{ lat: 10.800, lng: 106.644 }}
          >
          <Markers />
        </GoogleMap>
      </LoadScript>
     )
}

export default MyMapUpdated;