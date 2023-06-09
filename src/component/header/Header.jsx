import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I &#39;m </h5>
        <h1>Tran Van Duc</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="Description" />
        </div>
       
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header