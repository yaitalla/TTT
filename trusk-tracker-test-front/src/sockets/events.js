import io from "socket.io-client";
const SOCKET_API_URL = "http://localhost:3000";
const socket = io(SOCKET_API_URL);

export const parseDriverLocationToTableData = (driversLocations) =>
  Object.entries(driversLocations).map(
    ([key, { id, position: { lat, lon } } = { position: {} }]) => [id, lat, lon]
  );

 const socketEvents = ( setValue) => {
     
    socket.on('locationUpdated', (value) => {
        const loc = parseDriverLocationToTableData(value)
        setValue((state) => {
            return {...state, loc}
        })
  });
};

export const initSockets = ( {setValue} ) => {
    socketEvents( setValue );
};