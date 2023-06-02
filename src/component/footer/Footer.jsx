import React from 'react'
import './footer.css'

import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Tran Duc</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__social'>
        <a href="https://www.facebook.com/profile.php?id=100037168187276"><FaFacebook /></a>
        <a href="https://github.com/DangDuyNgoc"><FaGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Tran Van Duc-2023</small>
      </div>
    </footer>
  )
}

export default Footer