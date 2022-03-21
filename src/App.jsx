import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
      <>
         <Header />
         <About />
         <Nav />
         <Experience />
         <Portfolio />
         <Contact />
         <Testimonials />

      </>
    
  )
}

export default App