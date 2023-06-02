import React from 'react'
import CV from '../../assets/CV_Tran_Van_Duc_Front_End_Developer_Intern.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let&#39;s Talk</a>
    </div>
  )
}

export default CTA