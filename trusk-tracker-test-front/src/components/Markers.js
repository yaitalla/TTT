import React from "react";
import { Marker } from "react-google-maps"
import axios from 'axios';

const rounder = (num) => {
    return (Math.round(num * 1000)/1000) //Marker component does not recognize floats with too many decimals
}
const clickOnMarker = (driverId) => {
    let info = [];
    axios.get('http://localhost:3000/tasks/'+driverId).then((res) => {
        res.data.data.map(obj => {
            info.push(obj)
        })
    });
    console.log(info)
}
const Markers = ({def}) => {
    return (
        <>
            {
                def.map((driver, i) => {
                    return (
                        <Marker
                            onClick={() => clickOnMarker(driver[0])}
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