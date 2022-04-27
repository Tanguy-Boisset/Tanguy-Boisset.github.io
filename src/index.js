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
import Footer from './Footer/Footer';
import WorkInProgress from './WorkInProgress/WorkInProgress';

ReactDOM.render( 
  <React.StrictMode>
    <Router>
      <div style={{height:'100%'}}>
        <MyNavbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cv' element={<WorkInProgress/>} />
            <Route path='/writeups' element={<WorkInProgress/>} />
            <Route path='/projects' element={<WorkInProgress/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

