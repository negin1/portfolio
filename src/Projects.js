import React from 'react'
import './Projects.css'

function Projects({title, description, image}) {
  return (
    <div className= "each-project">
      <p>{title}</p>
      <p>{description}</p>
      <img src={image} alt=""/>
    </div>
  )
}

export default Projects
