import React, {useContext}  from "react";
import { Marker } from "react-google-maps"
import axios from 'axios';
import  {Context} from '../reducer';
import {ALL_DRIVERS} from '../reducer';
const rounder = (num) => {
    return (Math.round(num * 1000)/1000) //Marker component does not recognize floats with too many decimals
}

const Markers = ({def}) => {
    const {store, dispatch} = useContext(Context)
    const clickOnMarker = (driverId) => {
        axios.get('http://localhost:3000/tasks/'+driverId).then((res) => {
            dispatch({type: "OPEN_MODAL", vehicle: res.data.data})
        });
    }
    return (
        <>
            {
                
                def.map((driver, i) => {
                    if (store.filter.label === ALL_DRIVERS || store.filter.label === driver[0]) {
                        return (
                            <Marker
                                onClick={() => clickOnMarker(driver[0])}
                                label={driver[0]}
                                title={driver[0]}
                                key={i} 
                                position={ { lat: rounder(driver[1]), lng: rounder(driver[2])} } >
                            </Marker>
                        )
                    }
                    return null;
                })
            } 
        </>
    )
}

export default Markers;