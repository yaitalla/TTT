import { createContext } from 'react';
// import io from "socket.io-client";

export const ALL_DRIVERS = "All drivers"
export const initialState = {openModal: false, vehicle: [], theme: "light", filter: { label: ALL_DRIVERS, id: "#F0F8FF" }}
// const SOCKET_API_URL = "http://localhost:3000";

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
