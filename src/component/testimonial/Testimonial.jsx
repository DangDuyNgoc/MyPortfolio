import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    name: 'ABC',
    avatar: AVT1,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore aut fuga, in alias laboriosam rem fugit reiciendis'
  },

  {
    id: 2,
    name: 'ABC1',
    avatar: AVT2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore aut fuga, in alias laboriosam rem fugit reiciendis'
  },

  {
    id: 3,
    name: 'ABC3',
    avatar: AVT3,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore aut fuga, in alias laboriosam rem fugit reiciendis'
  },

  {
    id: 4,
    name: 'ABC4',
    avatar: AVT4,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore aut fuga, in alias laboriosam rem fugit reiciendis'
  }
]


function Testimonial() {
  return (
    <section id='testimonial'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <Swiper className='container testimonal__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
     
        {
          data.map(({id, name, avatar, review}) => {
            return (
               <SwiperSlide key={id} className='testimonal'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Img1'/>
                </div>

                <h3 className='client__name'>{name}</h3>

                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial