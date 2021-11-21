import React from 'react'
import svglogo from '../../assets/img/moviedb-logo.svg'

const About = () => {
  return (
    <div className="about container">
      <h1>About The Movie search App.</h1>
      <p>This product uses the TMDB API but is not endorsed or certified by TMDB</p>
      <a href="https://www.themoviedb.org/" rel="noreferrer" target="_blank"><img className="about__logo" src={svglogo} alt="movie database logo" /></a>
    </div>
  )
}

export default About