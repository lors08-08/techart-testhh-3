import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger/src";
import application from "./redux/application"

const store = createStore(application, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
