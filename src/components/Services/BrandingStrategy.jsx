import React from 'react'
import './Services.css'
import brand from '../../assets/brand.jpg'
import { Link } from 'react-router-dom'
import brand_img1 from '../../assets/brand-img1.webp'
import brand_img2 from '../../assets/brand-img2.webp'
import brand_img3 from '../../assets/brand-img3.webp'

function BrandingStrategy() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1 data-aos="fade-right">Crafting Unique Brand Identities: Strategic Planning for Long-Term Success</h1>
          </div>
      <div className="service-right">
              <img src={brand} alt=""  data-aos="zoom-in"/>
          </div>
         
      </div>
      <div className='ul'>
    
        <div className="topic-align1">
        <img src={brand_img1} alt=""  data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Communications Strategy</h1>
            <p>  A communications strategy outlines how a brand will convey its messages to target audiences. It includes defining key messages, selecting communication channels, and establishing tactics to ensure clear, consistent, and effective engagement with stakeholders.</p>
          </div>
        </div>
      
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Creative 360 Campaigns</h1>
            <p>Creative 360 campaigns deliver a unified brand message across all marketing channels. This approach integrates creative content and strategies into a comprehensive plan, ensuring consistent and impactful brand communication throughout various touchpoints.</p>
          </div>
          <img src={brand_img2} alt=""  data-aos="zoom-in"/>
        </div>
      
    
      <div className="topic-align1">
        <img src={brand_img3} alt=""  data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Corporate and Brand Identity</h1>
            <p> Corporate and brand identity encompasses the visual and thematic elements that represent a company’s image. This includes logos, color schemes, and design styles, which collectively establish a recognizable and cohesive brand presence.</p>
          </div>
        </div>
        
      
      </div>
    <Link to={"/contact"}><button>Get In Touch</button></Link>
    </div>
  </div>
  )
}

export default BrandingStrategy
