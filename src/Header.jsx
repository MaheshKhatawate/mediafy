import React, { useEffect,useRef,forwardRef, useState } from 'react'
import './styles/Header.css'
import GlitchText from './Glitchtext'
import Lanyard from './Lanyard'

const Header = forwardRef(({ scrollToSection, homeRef, aboutUsRef, servicesRef, contactUsRef },ref) => {
  const [isVisible,setIsVisible]=useState(false)

  function change(){
    setTimeout(()=>{
      setIsVisible((prev)=>!prev)
    },10000)
  }

  const toggleClick = ()=>{
    setIsVisible((prev)=>!prev)
    change()
  }
  return (
    <>
      <header ref={ref}>
        {isVisible && <Lanyard/>}
        <nav id="nav-bar">
          <img src="/assets/logo-white.png" alt="Error" id="nav-logo" />
          <ul className='nav-links'>
            <li><a href="" onClick={(e)=>{scrollToSection(homeRef,e)}}>Home</a></li>
            <li><a href="" onClick={(e)=>{scrollToSection(aboutUsRef, e)}}>About Us</a></li>
            <li><a href="" onClick={(e)=>{scrollToSection(servicesRef,e)}}>Services</a></li>
            <li><a href="" onClick={(e)=>{scrollToSection(contactUsRef,e)}}>Contact</a></li>
          </ul>
          <button id='btn' onClick={toggleClick}>
            Click me
          </button>
        </nav>
        <div className="header-main">
          <div id="main-content">
            <div>
            <div id="box1"></div>
            <div id="box2"></div>
            </div>
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={true}
              className="glitch-text"
            >
              MEDIAFY
            </GlitchText>
            <div id="side-note">REMEMBER WHO YOU WANTER TO BE</div>
          </div>
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className='glitch-small lower-content'
          >
            MEDIAFY YOUR BUSINESS
          </GlitchText>
        </div>
        <div className="header-footer">
          <div className="designs">Designs</div>
          <div className="join">Join With Us</div>
        </div>
      </header>
    </>
  )
})

export default Header
