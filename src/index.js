import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
