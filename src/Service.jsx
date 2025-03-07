import React from 'react'
import './styles/Service.css'

const Service = (props) => {
  return (
    <>
        <div className="service">
            <div className="service-heading">{props.heading}</div>
            <div className="service-divider"></div>
            <div className="service-content">
                <ul className='service-list'>
                    {
                        props.content.map(item => 
                            <li key={item.id}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
            <img src={props.image} alt="Error" id="service-img"/>
        </div>
    </>
  )
}
import './styles/Service.css'
import { li, ul } from 'framer-motion/client'

export default Service
