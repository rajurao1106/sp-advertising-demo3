import React from 'react'
import './WhatWeDo.css'
import img1 from '../../assets/img11.jpeg'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
import img6 from '../../assets/img6.webp'


import blue_tick from '../../assets/blue-tick.svg'
import { Link } from 'react-router-dom'

function WhatWeDo() {
  return (
    <div className='whatwedo' id='services'>
      <div className="whatwedo-con">
        <h1>OUR EXPERTISE</h1>
        <div className="whatwedo-box">
          
        <Link to={"/Outdoor-Advertising"} className="wwd-box" data-aos="zoom-in" >
            <div className="heading"><h2>Outdoor Advertising</h2></div>
            <img className="banner" src={img1} alt="" />
            <div className="points">
                <div className="points-box"><img src={blue_tick} alt="" /><p>Mobile Hoarding</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Hoardings</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Gantry</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Pole Kiosk</p></div>
            </div>
          </Link>
          <Link to={"/Digital-Marketing"} className="wwd-box" data-aos="zoom-in">
            <div className="heading"><h2>Digital Marketing</h2></div>
            <img className="banner" src={img2} alt="" />
            <div className="points">
                <div className="points-box"><img src={blue_tick} alt="" /><p>Website Development</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>SEO / SEM Optimization</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Social Media Marketing </p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Application Development</p></div>
            </div>
          </Link>
          <Link to={"/Designing-Services"} className="wwd-box" data-aos="zoom-in">
            <div className="heading"><h2>Designing Services</h2></div>
            <img className="banner" src={img3} alt="" />
            <div className="points">
                <div className="points-box"><img src={blue_tick} alt="" /><p>Packaging </p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Creative Concepts</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Design & Artwork </p></div>
            </div>
          </Link>
          <Link to={"/Print-Media"} className="wwd-box" data-aos="zoom-in">
            <div className="heading"><h2>Print Media</h2></div>
            <img className="banner" src={img4} alt="" />
            <div className="points">
                <div className="points-box"><img src={blue_tick} alt="" /><p>News paper ads </p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Brochure</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Pamphlet</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>In-shop Branding</p></div>
            </div>
          </Link>
          <Link to={"/Branding-Strategy"} className="wwd-box" data-aos="zoom-in">
            <div className="heading"><h2>Branding & Strategy</h2></div>
            <img className="banner" src={img5} alt="" />
            <div className="points">
                <div className="points-box"><img src={blue_tick} alt="" /><p>Communications Strategy</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Creative 360 Campaigns</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Corporate and brand Identity</p></div>
            </div>
          </Link>
          <Link to={"/Event-Promotion"} className="wwd-box" data-aos="zoom-in">
            <div className="heading"><h2>Event Promotion</h2></div>
            <img className="banner" src={img6} alt="" />
            <div className="points">
                <div className="points-box"><img src={blue_tick} alt="" /><p>Corporate Event</p></div>
                <div className="points-box"><img src={blue_tick} alt="" /><p>Mall Activation</p></div>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo