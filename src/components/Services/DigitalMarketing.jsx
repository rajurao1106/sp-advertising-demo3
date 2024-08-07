import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import digital_marketing_img from '../../assets/digital-marketing-img.jpg' 
import digital_marketing_img1 from '../../assets/digital-marketing-img1.jpg' 
import digital_marketing_img2 from '../../assets/digital-marketing-img2.jpg' 
import digital_marketing_img3 from '../../assets/digital-marketing-img3.jpg' 
import digital_marketing_img4 from '../../assets/digital-marketing-img4.jpg' 


function DigitalMarketing() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1>Connecting Brands with Audiences: Digital Marketing Strategies for Enhanced Engagement</h1>
          </div>
      <div className="service-right">
              <img src={digital_marketing_img} alt="" data-aos="zoom-in"/>
          </div>
      </div>
      <div className='ul'>
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Website Development</h1>
            <p>SEO improves a website’s visibility in search engines through keyword optimization, content enhancement, and backlink building, aiming to increase organic traffic and rank higher in search results.</p>
          </div>
          <img src={digital_marketing_img1} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={digital_marketing_img2} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>SEO / SEM Optimization</h1>
            <p> Hoardings are large, static advertising boards or structures typically placed in prominent locations like construction sites, along roadsides, or near shopping centers. They serve as a platform for high-impact advertising campaigns and are designed to catch the attention of passing pedestrians and drivers. </p>
          </div>
        </div>
      
      
      
      <div className="topic-align1" id='topic-align2'> 
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Social Media Marketing</h1>
            <p>Social media marketing involves using platforms like Facebook and Instagram to build brand awareness, engage with users, and drive traffic. It includes creating engaging content and running targeted ads to connect with audiences.</p>
          </div>
          <img src={digital_marketing_img3} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={digital_marketing_img4} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Application Development</h1>
            <p>Application development focuses on creating and maintaining software apps to enhance user experience and engagement. This includes designing interfaces, coding, and updating apps to provide value and meet user needs in digital marketing.</p>
          </div>
        </div>
        
      
      </div>
      <Link to={"/contact"}><button>Get In Touch</button></Link>
    </div>
  </div>
  )
}

export default DigitalMarketing
