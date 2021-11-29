import Web3 from 'web3';
import React from 'react';
import ReactDOM from 'react-dom';

import { provider } from './config.json'
import App from './App';
import reportWebVitals from './reportWebVitals';

const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);

ReactDOM.render(
  <React.StrictMode>
    <App web3={web3}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
