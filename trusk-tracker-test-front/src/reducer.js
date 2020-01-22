import { createContext } from 'react';

export const ALL_DRIVERS = "All drivers"
export const initialState = {
    zoom: 12,
    center: { lat: 10.800, lng: 106.644 },
    openModal: false,
    vehicle: [],
    theme: "light",
    filter: { label: ALL_DRIVERS, id: "#F0F8FF" }
}



export const Context = createContext();

export const reducer =  (state, action) => {
    switch(action.type){
        case "FILTER":
            return {
                ...state,
                filter: action.filter
            }
        case "LIGHT_THEME":
            return {
                ...state,
                theme: "light",
            }
        case "DARK_THEME":
                return {
                    ...state,
                    theme: "dark",
                }
        case "OPEN_MODAL":
            return {
                ...state,
                openModal: true,
                vehicle: action.vehicle
            }
        case "CLOSE_MODAL":
                return {
                    ...state,
                    openModal: false,
                    vehicle: []
                }
        default:
            return state;
    }
}
