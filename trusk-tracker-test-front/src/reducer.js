import { createContext } from 'react';

export const initialState = {openModal: false, vehicle: [], theme: "light"}

export const Context = createContext();

export const reducer =  (state, action) => {
    switch(action.type){
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
