import React from 'react'
import './index.css'

import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Portfolio from './component/portfolio/Portfolio'
import Service from './component/service/Service'
import Testimonial from './component/testimonial/Testimonial'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/*<Service />*/}
      <Portfolio />
      {/*<Testimonial />*/}
      <Contact />
      <Footer />

    </>
  )
}

export default App;
