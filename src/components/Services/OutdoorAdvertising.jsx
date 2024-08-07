import React from 'react'
import './Services.css'
import outdoor_img1 from '../../assets/outdoor-img1.jpg'
import { Link } from 'react-router-dom'
import outdoor_img2 from '../../assets/outdoor-img2.jpg'
import outdoor_img3 from '../../assets/outdoor-img3.jpg'
import showcase1 from '../../assets/showcase1.webp'
import showcase2 from '../../assets/showcase2.webp'

function OutdoorAdvertising() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1 data-aos="fade-right">Capturing Attention On-the-Go: The Power of Outdoor Advertising in Public Spaces</h1>
          </div>
      <div className="service-right">
              <img src={outdoor_img1} alt="" data-aos="zoom-in"/>
          </div>
          
      </div>
      <div className='ul'>
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Mobile Hoarding</h1>
            <p>Mobile hoardings are large, movable advertising panels on vehicles, allowing flexible campaigns by traveling to high-traffic areas, events, or neighborhoods for dynamic exposure.</p>
          </div>
          <img src={outdoor_img2} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={outdoor_img3} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Hoardings</h1>
            <p>Hoardings are large, stationary advertising boards placed in prominent locations to capture attention and deliver high-impact campaigns to pedestrians and drivers.</p>
          </div>
        </div>
      
      
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Gantry</h1>
            <p>Gantries are large, elevated structures that hold advertising panels or digital screens above roadways, highways, or busy intersections. They are designed to be highly visible to drivers and pedestrians from a distance.</p>
          </div>
          <img src={showcase1} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={showcase2} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Pole Kiosk</h1>
            <p>Pole kiosks are advertising units mounted on street poles, featuring small vertical panels for posters or digital content, commonly found in urban and high-traffic areas.</p>
          </div>
        </div>
        
      
      </div>
      <Link to={"/contact"}><button>Get In Touch</button></Link>
    </div>
  </div>
  )
}

export default OutdoorAdvertising
