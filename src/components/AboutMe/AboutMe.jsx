import React from 'react'
import './AboutMe.css'
import about_img1 from '../../assets/about-img1.jpeg'
import about_img2 from '../../assets/about-img2.jpeg'
import about_img3 from '../../assets/about-img3.jpeg'
import blur_img from '../../assets/blur-img.jpeg'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className='about-me' id='about'>
        <h1>ABOUT ME</h1>
      <div className="about-me-con">
        <img className='blur-image' src={blur_img} alt="" />
        <div className="about-me-box">
            <div className="about-details" data-aos="fade-right" data-aos-duration="1000">
                <h1>WHO WE ARE ?</h1>
                <p>SP Advertising is an independent, creatively driven full services marketing communications agency born and groomed in Raipur Chhattisgarh, providing services across India.</p>
                <Link to={"/welcome-page"}><button>READ MORE</button></Link>
            </div>
            <img src={about_img1} alt="" data-aos="fade-down" data-aos-duration="1000"/>
        </div>
        <div className="about-image">
        <img className='ai-img1' src={about_img2} alt="" data-aos="fade-up" data-aos-duration="1000"/>
        <img className='ai-img2'  src={about_img3} alt="" data-aos="fade-right" data-aos-duration="1000"/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
