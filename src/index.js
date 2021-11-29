import Web3 from 'web3';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


var provider = 'https://mainnet.infura.io/v3/ff04190c82ae4cb79467d6dbe26b3474'
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

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
