import { createContext } from 'react';
import { ALL_DRIVERS, FILTER, LIGHT_THEME, DARK_THEME,
            OPEN_MODAL, CLOSE_MODAL } from './constants';
export const initialState = {
    zoom: 12,
    center: { lat: 10.800, lng: 106.644 },
    openModal: false,
    vehicle: [],
    theme: LIGHT_THEME,
    filter: { label: ALL_DRIVERS, id: "#F0F8FF" }
}



export const Context = createContext();

export const reducer =  (state, action) => {
    switch(action.type){
        case FILTER:
            return {
                ...state,
                filter: action.filter
            }
        case LIGHT_THEME:
            return {
                ...state,
                theme: LIGHT_THEME,
            }
        case DARK_THEME:
                return {
                    ...state,
                    theme: DARK_THEME,
                }
        case OPEN_MODAL:
            return {
                ...state,
                openModal: true,
                vehicle: action.vehicle
            }
        case CLOSE_MODAL:
                return {
                    ...state,
                    openModal: false,
                    vehicle: []
                }
        default:
            return state;
    }
}
