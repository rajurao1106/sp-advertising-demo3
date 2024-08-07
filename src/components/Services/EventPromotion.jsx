import React from 'react'
import './Services.css'
import event from '../../assets/event.jpg'
import { Link } from 'react-router-dom'
import event_img from '../../assets/event-img.webp'
import event_img1 from '../../assets/event-img1.webp'

function EventPromotion() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1>Driving Engagement and Attendance: Effective Strategies for Event Promotion</h1>
          </div>
      <div className="service-right">
              <img src={event} alt="" data-aos="zoom-in"/>
          </div>
          
      </div>
      <div className='ul'>
    
        <div className="topic-align1">
        <img src={event_img} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right" >
            <h1>Corporate Event</h1>
            <p> A corporate event is a professionally organized gathering for business purposes, such as conferences, seminars, or company parties. It focuses on networking, team-building, or sharing important information, often requiring strategic promotion to ensure success.</p>
          </div>
        </div>
      
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Mall Activation</h1>
            <p>Mall activation involves organizing promotional events or interactive activities within a shopping mall to attract shoppers and boost engagement. This can include product demonstrations, contests, and experiential marketing to enhance brand visibility and drive foot traffic.</p>
          </div>
          <img src={event_img1} alt="" data-aos="zoom-in"/>
        </div>
      
      
      </div>
      <Link to={"/contact"}><button>Get In Touch</button></Link>
    </div>
  </div>
  )
}

export default EventPromotion
