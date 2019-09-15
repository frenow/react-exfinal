import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './store';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Provider>,
  rootElement
);