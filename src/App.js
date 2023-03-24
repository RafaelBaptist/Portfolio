import logo from './assets/img/icons8-nebula-50.png'
import './App.js'
import React, { Component } from 'react'
// import { Navbar } from 'react-bootstrap';
import Home from './pages/home'
import './App.css'
import CustomNavbar from './components/navbar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ProjectCard } from './components/ProjectCard'
// import 'bootstrap/dist/css/bootstrap.main.css'
// peguei do bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Home />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
