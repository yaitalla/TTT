import React, { useContext } from "react";
import MyTable from './components/MyTable';
import { Heading, HeadingLevel } from "baseui/heading";
import MyMap from './components/LightThemeMap';
import MyMapDark from './components/DarkThemeMap';
import { Context } from './reducer';
import MyModal from "./components/ModalTable";
import SelectInput from './components/SelectInput';
import { GOOGLE_MAP_URL_WITH_MY_API_KEY, DARK_THEME} from "./constants";

const Tracker = () => {
  const {store} = useContext(Context)

  return (
    <>
        <HeadingLevel>
          <Heading styleLevel={6}>Click a Marker on the Map to see Drivers information</Heading>
        </HeadingLevel>
        {
          store.theme === DARK_THEME ? 
          <MyMapDark
            isMarkerShown
            googleMapURL={GOOGLE_MAP_URL_WITH_MY_API_KEY}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> :
          <MyMap
            isMarkerShown
            googleMapURL={GOOGLE_MAP_URL_WITH_MY_API_KEY}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        }
        <SelectInput/>
        <MyTable/>
        <MyModal />
      
    </>
  );
};

export default Tracker;
