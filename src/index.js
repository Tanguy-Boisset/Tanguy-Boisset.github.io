import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import MyNavbar from './Navbar/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <MyNavbar/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

