import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActiveContextProvider} from "./context/ActiveContextProvider";


ReactDOM.render(
  <React.StrictMode>
      <ActiveContextProvider>
          <App />
      </ActiveContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
