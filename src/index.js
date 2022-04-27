import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Home from './Home/Home';
import MyNavbar from './Navbar/Navbar';
import WorkInProgress from './WorkInProgress/WorkInProgress';

ReactDOM.render( 
  <React.StrictMode>
    <MyNavbar/>
    <Router>
      <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cv' element={<WorkInProgress/>} />
            <Route path='/writeups' element={<WorkInProgress/>} />
            <Route path='/projects' element={<WorkInProgress/>} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

