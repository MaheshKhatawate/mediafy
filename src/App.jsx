import { useRef, useState } from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'

function App() {
  const aboutUsRef=useRef(null)
  const servicesRef=useRef(null)
  const contactUsRef=useRef(null)
  const homeRef=useRef(null)

  const scrollToSection = (ref, event)=>{
    event.preventDefault()
    ref.current?.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
      <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutUsRef={aboutUsRef} servicesRef={servicesRef} contactUsRef={contactUsRef}/>
      <AboutUs ref={aboutUsRef}/>
      <Services ref={servicesRef}/>
      <ContactUs ref={contactUsRef}/>
    </>
  )
}

export default App
