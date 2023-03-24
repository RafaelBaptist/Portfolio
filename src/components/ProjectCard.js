import { Col } from 'react-bootstrap'
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}
