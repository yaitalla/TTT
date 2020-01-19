import { createContext } from 'react';

export const initialState = {openModal: false, vehicle: [], theme: "light", filter: { label: "All", id: "#F0F8FF" }}

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
                theme: "light"
            }
        case "DARK_THEME":
                return {
                    ...state,
                    theme: "dark"
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
