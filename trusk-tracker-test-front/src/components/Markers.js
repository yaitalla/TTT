import React from "react";
import { Marker } from "react-google-maps"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const rounder = (num) => {
    return (Math.round(num * 1000)/1000) //Marker component does not recognize floats with too many decimals
}
const Markers = ({def}) => {
    return (
        <>
            {
                def.map((driver, i) => {
                    return (
                        <Marker
                            label={driver[0]}
                            title={driver[0]}
                            key={i} 
                            position={ { lat: rounder(driver[1]), lng: rounder(driver[2])} } ></Marker>
                    )
                })
            }
        </>
    )
}

export default Markers;