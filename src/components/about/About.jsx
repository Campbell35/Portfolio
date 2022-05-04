import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {GrFolder} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small> Graduate of the Dev Academy where I worked on five single-day group projects, and participated in group presentations of those projects and worked on one final week-long group project. </small>
          </article>
           <article className='about_card'>
            <GrFolder className='about_icon'/>
            <h5>Projects</h5>
            <small> Note finder, RCMDR, BarkMates, Drum Pad </small>
          </article>
          </div>
          <p>
            Full-stack developer passionate about technology and how the technology can be utilized to solve problems. A strong developer in both technical and human (soft) skills, able to learn new technologies, able to learn quickly, very supportive in a team environment and a good team player.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About