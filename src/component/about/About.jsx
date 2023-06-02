import React from 'react'
import './about.css'

import ME from '../../assets/me-about.jpg'

import {FaAward} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='me'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Information Technology</small>
            </article>

            <article className='about__card'>
              <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>HTML, CSS, Javascript</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>+3 Project</small>
            </article>
          </div>

          <p>
            - Have experience good communication and learning skills.
            <br />
            - Strengths: Front-end technology web application development.
            <br />
            - Basic in HTML, CSS, JavaScript.
            <br />
            - Basic English.
            <br />
            - Experience with data structure libraries- Ability to learn and apply new technology quickly.
            <br />
            - Current working location: Da Nang, Viet Nam.
          </p>

          <a href='#contact' className='btn btn-primary'>Let &#39;s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
