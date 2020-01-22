import React from "react";
import ReactDOM from "react-dom";
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import App from "./App";


// resetting modules before each test conflict with Socket.io connection
// beforeEach(() => {
//   jest.resetModules();
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  act(() => {
    ReactDOM.unmountComponentAtNode(div);
  });
});

