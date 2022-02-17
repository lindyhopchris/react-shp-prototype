import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './server';
import preload from './helpers/preload';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const data = preload();

ReactDOM.render(
  <React.StrictMode>
    <App basename={data?.basename} />
  </React.StrictMode>,
  document.getElementById('react-shp-app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
