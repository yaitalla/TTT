import React, { useEffect, useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import Markers from './Markers';

const MyMap = withScriptjs(withGoogleMap((props) =>{
    const [data, setData] = useState([]);
    useEffect(() => {
          setData(props.data);
    });
    
    return (
        
        <GoogleMap defaultZoom={12} 
            defaultCenter={{ lat: 10.800, lng: 106.644 }}>
                <Markers def={data}/>
        </GoogleMap>
)}))

export default MyMap;