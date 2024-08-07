import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'


function Footer() {


  
  return (
    <div className='footer'>
      <div className="footer-con">
      
        <div className="footer-box1">
          <img className='footer-logo' src={logo} alt="" />
          <h2>Transform Your Brand with Innovative Advertising Solutions - Elevate, Engage, and Inspire Your Audience Today!</h2>
          <div className="icon-con">
          <Link to={"/contact"}><button>Contact Us</button></Link>
        <div className="icons">
                  <a href="https://www.facebook.com/spadvertisingraipur"><img src={facebook} alt="" /></a>
                  <a href="https://www.instagram.com/spadvertisingrpr/"><img src={instagram} alt="" /></a>
                </div>
          </div>
        </div>
        <div className='footer-box'>
        <div className="footer-box2">
          <ul>
          <h3>Pages</h3>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about-me"}><li>About Us</li></Link>
          <Link to={"/welcome-page"}><li>Clients</li></Link>
          </ul>
            
        </div>
        <div className="footer-box3">
          <ul>
          <h3>Services</h3>
          <Link to={"/Outdoor-Advertising"}><li>Outdoor Advertising</li></Link>
          <Link to={"/Digital-Marketing"}><li>Digital Marketing</li></Link>
          <Link to={"/Designing-Services"}><li>Event Promotion</li></Link>
          <Link to={"/Print-Media"}><li>Designing Services</li></Link>
          <Link to={"/Branding-Strategy"}><li>Print Media</li></Link>
          <Link to={"/Event-Promotion"}><li>Branding & Strategy</li></Link>
          </ul>
        </div>
        
      </div>
        
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright © 2024 SP Advertising - All Rights Reserved.</p>
        <div><p>Privacy Policy</p><p>Terms and Conditions</p></div>
      </div>
    </div>
  )
}

export default Footer
