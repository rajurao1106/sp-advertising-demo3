import React from 'react'
import './Home.css'
import home_image from '../../assets/business.svg'
import rocket from '../../assets/rocket.gif'
import f_img1 from '../../assets/f-img1.svg'

import ScrollEffect from '../ScrollEffect/ScrollEffect'
import Showcase from '../Showcase/Showcase'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div className='home' id='home'>
      <div className="home-con">
      
        <div className="web-details" data-aos="fade-right" >
            <h1>WE'LL HELP YOUR BUSINESS TO GET ON A NEW STAGE! <img src={rocket} alt="" /></h1>
            <p>Elevate your business with our expert strategies, innovative solutions, and dedicated support. Achieve growth, success, and excellence. Partner with us and thrive in today's competitive market!</p>
            <div className="web-btn">
                
                <Link to={"/services"}><button>Browse Services</button></Link>
            </div>
        </div>
        <div className="image">
        <div className="f-image">
        <img src={f_img1} alt="" />
        
        </div>
          <div data-aos="fade-up">
          <img className='home-image'  src={home_image} alt=""/>
          </div>
        </div>
      </div>
    </div>
    <ScrollEffect/>
    <Showcase/>
    <WhatWeDo/>
    </div>
  )
}

export default Home
