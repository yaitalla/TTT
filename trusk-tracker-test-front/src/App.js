import React, {useState, useReducer} from  "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import  {reducer, initialState, Context } from './reducer';
import Tracker from "./Tracker";
import {Button, SHAPE} from 'baseui/button';
import Layout from "./components/Layout";

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
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
          <Layout>
            <Tracker />
            
          </Layout>
        </BaseProvider>
        <Button
          shape={SHAPE.pill}
          onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          }
      >
        Toggle light/dark theme!
      </Button>
      </StyletronProvider>
     
    </Context.Provider>
    
  );
};

export default App;
