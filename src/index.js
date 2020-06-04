import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./stores/configureStore";

ReactDOM.render(
  <Provider store={store}>
      <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
