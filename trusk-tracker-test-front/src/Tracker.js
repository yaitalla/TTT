import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Heading, HeadingLevel } from "baseui/heading";

import DriversTable from "./components/DriversTable";
import MyMap from './components/MyMap';
const SOCKET_API_URL = "http://localhost:3000";

const parseDriverLocationToTableData = driversLocations =>
  Object.entries(driversLocations).map(
    ([key, { id, position: { lat, lon } } = { position: {} }]) => [id, lat, lon]
  );

const Tracker = () => {
  const [driversLocations, setDriversLocations] = useState({});

  useEffect(() => {
    const socket = io(SOCKET_API_URL);
    socket.on("locationUpdated", data => {
      setDriversLocations(data);
    });
    return socket.close;
  }, []);


  return (
    <>
      <HeadingLevel>
        <Heading styleLevel={5}>Drivers :</Heading>
      </HeadingLevel>
      <DriversTable data={parseDriverLocationToTableData(driversLocations)} />
      <MyMap
        isMarkerShown
        data={parseDriverLocationToTableData(driversLocations)}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};

export default Tracker;
