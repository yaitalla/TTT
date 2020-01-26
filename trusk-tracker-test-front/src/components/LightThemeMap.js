import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import Markers from './Markers';

const MyMap = withScriptjs(withGoogleMap(() =>{
  return (
        
        <GoogleMap  defaultZoom={12} 
                    defaultCenter={{ lat: 10.800, lng: 106.644 }}>
                <Markers />
        </GoogleMap>
)}))

export default MyMap;