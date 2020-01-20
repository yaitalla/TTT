import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE } from 'baseui/modal';
import DriversTable from "./components/DriversTable";
import MyMap from './components/MyMap';
import { Context } from './reducer';
import ModalTable from "./components/ModalTable";
import SocketContext from './sockets/context';

const Tracker = () => {
  const {store, dispatch} = useContext(Context)
  const { loc } = useContext(SocketContext);

  const close = () => {
    dispatch({type: "CLOSE_MODAL"})
  }
  // console.log("location: ", loc)
  return (
    <>
        <DriversTable data={loc} />
        <MyMap
          isMarkerShown
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
