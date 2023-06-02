import React from 'react'
import './protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ABC',
    github: 'https://github.com/'    
  },

  {
    id: 2,
    image: IMG2,
    title: 'ABC1',
    github: 'https://github.com/'    
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>What Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-img'>
                  <img src={image} alt='Img1'/>
                </div>

                <h3>{title}</h3>

                <div className='portfolio__item-cta'>
                  <a href={github} target='_blank'>Github</a>
                </div>
              </article>
            )

          }) 
        }
      </div>

    </section>
  )
}

export default Portfolio