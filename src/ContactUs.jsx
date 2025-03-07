import React, { forwardRef } from 'react'
import CircularGallery from './CircularGallery'
import './styles/ContactUs.css'
const ContactUs = forwardRef((props, ref) => {
    const items = [
        { image: "/assets/kms-collab.jpg", text: "KMS" },
        { image: "/assets/hubballi-times-collab.jpg", text: "Hubballi Times" },
        { image: "/assets/infinity-pride-collab.jpg", text: "Infinity Pride" },
        { image: "/assets/pmp-collab.jpg", text: "PMP" },
        { image: "/assets/rishta-collab.jpg", text: "Rishta" },
        { image: "/assets/sagarika-collab.jpg", text: "Sagarika" },
        { image: "/assets/rishta-collab.jpg", text: "Rishta" },
    ]
    return (
        <div className='contact-us'>
            <div className='contact-us-heading'>Our Clients</div>
            <div className="divider"></div>
            <div className='collab-container'>
                <CircularGallery
                    items={items}
                    textColor='black'
                />
            </div>
            <div className="divider"></div>
            <div className="contact-us-heading" ref={ref}>Contact Us <a href="https://www.instagram.com/mediafyyy?igsh=MTlseXE3cjBtdW9pdA==" className='insta' target='_blank'><i className="fa-brands fa-instagram"></i></a></div>
        </div>
    )
})

export default ContactUs
