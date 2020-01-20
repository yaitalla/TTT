import React, { useState, useEffect } from "react";
import SocketContext from "./context";
import { initSockets } from "./events";

const SocketProvider = (props) => {
  const [value, setValue] = useState({});
  useEffect(() => initSockets( {setValue} ), [setValue]);
  return(
      <SocketContext.Provider value={ value }>
        { props.children }
      </SocketContext.Provider>
    )
};
export default SocketProvider;