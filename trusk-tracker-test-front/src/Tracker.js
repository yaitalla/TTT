import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE } from 'baseui/modal';
// import DriversTable from "./components/DriversTable";
import MyTable from './components/MyTable';
import { Heading, HeadingLevel } from "baseui/heading";
import {useStyletron} from 'baseui';
import MyMap from './components/MyMap';
import MyMapDark from './components/MyMapDark';
import { Context } from './reducer';
import ModalTable from "./components/ModalTable";
import SelectInput from './components/SelectInput';

const Tracker = () => {
  const [css] = useStyletron();
  const {store, dispatch} = useContext(Context)

  const close = () => {
    dispatch({type: "CLOSE_MODAL"})
  }
  return (
    <>
        <HeadingLevel>
          <Heading styleLevel={6}>Click a Marker on the Map to see Drivers information</Heading>
        </HeadingLevel>
        {
          store.theme === "dark" ? 
          <MyMapDark
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> :
          <MyMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTGhtVXuB3reFdv-1CEA3IjXWwALayyyM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        }
        
            <SelectInput/>

        {/* <DriversTable data={loc} /> */}
        <MyTable/>
        <Modal size={SIZE.auto} id={'yModalId'}
                onClose={close} isOpen={store.openModal}
                unstable_ModalBackdropScroll={true}
                className={css({display: 'flex', flexDirection: 'column'})}
                >
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
