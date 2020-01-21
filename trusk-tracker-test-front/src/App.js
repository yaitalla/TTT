import React, {useState, useReducer} from  "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import  {reducer, initialState, Context } from './reducer';
import Tracker from "./Tracker";
import {Button, SIZE, SHAPE} from 'baseui/button';
import Layout from "./components/Layout";
import SocketProvider from './sockets';
const engine = new Styletron();
const THEME = {
  light: 'light',
  dark: 'dark',
};
const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const [theme, setTheme] = useState('light');
  return (
    <Context.Provider value={{store, dispatch}} >
      <StyletronProvider value={engine} theme={theme === 'light' ? LightTheme : DarkTheme}>
        
        <BaseProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
          <Layout>
            <Button
                  size={SIZE.large}
                  shape={SHAPE.pill}
                  onClick={() =>
                    setTheme(theme === THEME.light ? THEME.dark : THEME.light)
                  }
              >
                Toggle light/dark theme!
              </Button>
              <SocketProvider><Tracker /></SocketProvider>
            
          </Layout>
        </BaseProvider>
       
      </StyletronProvider>
    </Context.Provider>
    
  );
};

export default App;
