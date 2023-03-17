import logo from './assets/img/icons8-nebula-50.png';
import './App.js';
import React, { Component }  from 'react';
// import { Navbar } from 'react-bootstrap';
import Home from './pages/home'
import './App.css'
import CustomNavbar  from './components/navbar';
import {Banner} from './components/Banner'
// import 'bootstrap/dist/css/bootstrap.main.css'

// peguei do bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
<div className='App'>

<CustomNavbar  />
<Home/>
<Banner/>
</div>
  );
}

export default App;

