import React,{forwardRef} from 'react'
import './styles/AboutUs.css'

const AboutUs = forwardRef((props,ref) => {
    return (
        <>
            <div className="about-us" ref={ref}>
                <div className="about-us-content">
                    <div id="about-us-head">About Us</div>
                    <p id="about-us-text">A dynamic marketing agency specializing in social media and influencer marketing.

                        Focused on helping brands grow through strategic digital campaigns.</p>
                </div>
                <img src="/assets/bag.jpg" alt="Error" id='about-us-img'/>
            </div>
        </>
    )
})

export default AboutUs
