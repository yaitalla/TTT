import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import Markers from './Markers';

import styles from './GoogleMapStyles';

const MyMap = withScriptjs(withGoogleMap(() =>{
    return (
        
        <GoogleMap  defaultZoom={12} 
                    defaultOptions={{
                        //  styles: styles // change default map styles
                    }}
                    defaultCenter={{ lat: 10.800, lng: 106.644 }}>
                <Markers />
        </GoogleMap>
)}))

export default MyMap;