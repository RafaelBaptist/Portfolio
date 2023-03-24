import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import logo from '../assets/img/icons8-nebula-50.png'
import navIcon1 from '../assets/img/icons8-github-50.png'
import navIcon2 from '../assets/img/icons8-instagram-circle-50.png'
import navIcon3 from '../assets/img/icons8-linkedin-circled-50 (1).png'
import React, { Component } from 'react'
import NavbarIcon from '../assets/img/icons8-menu-32.png'

export const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <Navbar expand="lg" className={'bg-main'}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav">
          <span className="Navbar-togller-icon">
            <img src={NavbarIcon} />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active Nav-link' : 'Nav-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active Nav-link' : 'Nav-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active Nav-link' : 'Nav-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <div className="navCenter">
            <div className="Navbar-text">
              <div className="social-icon">
                <section className="icon1">
                  <a href="https://github.com/RafaelBaptist">
                    <img src={navIcon1} alt="" />
                  </a>
                </section>
                <section className="icon2">
                  <a href="https://www.instagram.com/kvshsan/">
                    <img src={navIcon2} alt="" />
                  </a>
                </section>
                <section className="icon3">
                  <a href="https://www.linkedin.com/in/rafael-de-souza-baptista-4a0baa209/">
                    <img src={navIcon3} alt="" />
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="navCenter">
            <div className="vddtt">
              <a href="#Contact">
                <div className="vvd" onClick={() => console.log('#Contact')}>
                  Let's Connect
                </div>
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
