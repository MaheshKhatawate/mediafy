import React, { forwardRef } from 'react'
import Service from './Service'
import './styles/Services.css'

const Services = forwardRef((props, ref) => {
  return (
    <>
      <div className="services" ref={ref}>
        <div className="services-title">Our Services</div>
        <div className="divider"></div>

        <div className="service-items">
          <Service heading="Social Media Marketing" content={[{ id: 1, text: "Content Creation," }, { id: 2, text: "Ads," }, { id: 3, text: "Engagment Strategies." }]} image="/assets/quote-3.jpeg" />
          <Service heading="Influencer Marketing" content={[{id:1,text:"Collaborating with influencers for brand promotions."}]} image="/assets/quote-5.jpeg" />
          <Service heading="Branding & Strategy" content={[{id:1,text:"Custom marketing plans tailored for businesses."}]} image="/assets/header-logo.jpg" />
        </div>
      </div>
    </>
  )
})

export default Services
