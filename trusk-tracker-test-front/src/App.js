import React, { useReducer, useCallback } from  "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import  {reducer, initialState, Context } from './reducer';
import { LIGHT_THEME, DARK_THEME } from './constants';
import Tracker from "./Tracker";
import {Button, SIZE, SHAPE} from 'baseui/button';
import Layout from "./components/Layout";
import SocketProvider from './sockets';
import styles from './components/GoogleMapStyles';
const engine = new Styletron();

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const changeTheme = useCallback((theme) => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    dispatch({type: newTheme, theme: styles})
  }, [dispatch])
  return (
    <Context.Provider value={{store, dispatch}} >
      <StyletronProvider value={engine}>
        
        <BaseProvider theme={store.theme === LIGHT_THEME ? LightTheme : DarkTheme}>
          <Layout>
            <Button
                  size={SIZE.large}
                  shape={SHAPE.pill}
                  onClick={() =>
                    changeTheme(store.theme)
                  }
              >Toggle light/dark theme!
              </Button>
            <SocketProvider>
              <Tracker/>
            </SocketProvider>
          </Layout>
        </BaseProvider>
       
      </StyletronProvider>
    </Context.Provider>
    
  );
};

export default App;
