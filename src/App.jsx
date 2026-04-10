import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Headline from './components/Headline/Headline'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Testimonial from './components/Testimonial/Testimonial'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
const App = () => {
  return (
    <div>
      <Navbar/>
       <Hero/> 
      <Headline/>
       <AboutMe/>
       {/* <Education /> */}
       <Services/>
      <Projects/>
      <Headline />
      <Testimonial />
      <ContactMe />
      {/* <Footer /> */}
    </div>
  )
}

export default App