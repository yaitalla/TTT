import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE } from 'baseui/modal';
import DriversTable from "./components/DriversTable";
import MyMap from './components/MyMap';
import { Context } from './reducer';
import ModalTable from "./components/ModalTable";
const SOCKET_API_URL = "http://localhost:3000";

const parseDriverLocationToTableData = driversLocations =>
  Object.entries(driversLocations).map(
    ([key, { id, position: { lat, lon } } = { position: {} }]) => [id, lat, lon]
  );

const Tracker = () => {
  const [driversLocations, setDriversLocations] = useState({});
  const {store, dispatch} = useContext(Context)

  useEffect(() => {
    const socket = io(SOCKET_API_URL);
    socket.on("locationUpdated", data => {
      setDriversLocations(data);
    });
    return socket.close;
  }, []);

  const close = () => {
    dispatch({type: "CLOSE_MODAL"})
  }
  return (
    <>
      <DriversTable data={parseDriverLocationToTableData(driversLocations)} />
      <MyMap
        isMarkerShown
        data={parseDriverLocationToTableData(driversLocations)}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Modal size={SIZE.auto} id={'yModalId'} onClose={close} isOpen={store.openModal}>
        <ModalHeader>Driver Information</ModalHeader>
        <ModalBody>
          <ModalTable  data={store.vehicle[0]}></ModalTable>
          <ModalTable  data={store.vehicle[1]}></ModalTable>
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={close}>Cancel</ModalButton>
          <ModalButton onClick={close}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Tracker;
