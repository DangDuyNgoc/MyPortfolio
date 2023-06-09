import React from 'react'
import './service.css'

import {BiCheck} from 'react-icons/bi'

function Service() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>ADBC</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>
          
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>
          
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>
          
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
      
      </div>
     
    </section>
  )
}

export default Service