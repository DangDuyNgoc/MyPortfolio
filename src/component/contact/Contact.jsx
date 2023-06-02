import React from 'react'
import './contact.css'

import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_453k3ma', 'template_7hhpatp', form.current, 'Dsx5H26XDTk6kzAng')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ductv.21it@vku.udn.vn</h5>
            <a href='mailto:ductv.21it@vku.udn.vn'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            {/*<h5>feads</h5>*/}
            <a href='https://facebook.com/messages/t' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Zalo</h4>
            <h5>0585133268</h5>
            <a href='https://zalo.com' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact