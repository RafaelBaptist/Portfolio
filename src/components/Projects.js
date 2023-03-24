import 'bootstrap/dist/css/bootstrap.min.css'

import { Col, Container, Tab, Row, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import teste from '../assets/img/icons8-react-480.png'
import React, { Component } from 'react'

import site1 from '../assets/img/museu.png'
import site2 from '../assets/img/red canids.png'
import site3 from '../assets/img/chal hotel.png'
import site4 from '../assets/img/netfliz.png'
// import bgtest from '../assets/img/eu-removebg-preview.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Museu Nacional ',
      description: (
        <a href="#">
          {' '}
          'Final project of a website that I made through a course, using html,
          css and js'
          <br />
          the project is available on Github
        </a>
      ),
      imgUrl: site1,
    },

    {
      title: 'Red Canids ',
      description: (
        <a href="https://github.com/RafaelBaptist/RedCanids">
          {' '}
          'My first completed project, I used css and html.'
          <br />
          the project is available on Github
        </a>
      ),
      imgUrl: site2,
    },

    {
      title: 'Chal Hotel ',
      description: (
        <a href="https://github.com/RafaelBaptist/Chal-Hotel">
          {' '}
          'HTML and CSS Course Project'
          <br />
          the project is available on Github
        </a>
      ),
      imgUrl: site3,
    },

    {
      title: 'NetFliz ',
      description: (
        <a href="#">
          {' '}
          'Old project I tried to recreate a streaming site on, which I will get
          back to work on soon'
          <br />
          the project isnt available on Github
        </a>
      ),
      imgUrl: site4,
    },
  ]

  return (
    <section className="project" id="projects">
      <container>
        <h2>Projects</h2>
        <div className="containerProjects">
          {projects.map((value, index) => {
            return <ProjectCard key={index} {...value} />
          })}
        </div>
      </container>
    </section>
  )
}
