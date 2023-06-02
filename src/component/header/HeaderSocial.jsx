import React from 'react'
import {BsFacebook}  from 'react-icons/bs'
import {BsGithub}  from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/profile.php?id=100037168187276' target='_blank'> <BsFacebook /> </a>
        <a href='https://github.com/DangDuyNgoc' target='_blank'><BsGithub /> </a>
    </div>
  )
}

export default HeaderSocial