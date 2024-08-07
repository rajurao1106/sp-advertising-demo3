import React from 'react'
import './WelcomePage.css'
import logo2 from '../../assets/logo2.webp'
import client_image1 from '../../assets/client1.webp'
import client_image2 from '../../assets/client2.webp'
import client_image3 from '../../assets/client3.webp'
import client_image4 from '../../assets/client4.webp'
import client_image5 from '../../assets/client5.webp'

import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function WelcomePage() {

    const settings = {
      dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
    };

  return (
    <div className='welcome' id='welcome'>
        <h1>WELCOME TO SP ADVERTISING AGENCY</h1>
      <div className="welcome-con">
        <div className="welcome-box">
        <div className="logo2">
            <img src={logo2} alt="" />
        </div>
        <div className="welcome-sentence">
            <div className="sentence-center">
            <h2>Welcome to SP Advertising, your go-to Advertising Agency</h2>
            <p>At SP Advertising, we are dedicated to providing top-notch advertising services to our clients. We specialize in creating eye-catching ads that grab the attention of your target audience and deliver results. Our team of experts is passionate about what we do, and we work tirelessly to ensure that every project we take on is a success. From print ads to digital campaigns, we've got you covered.</p>
            </div>
            </div>
        </div>
      <Slider {...settings} className="clients-image">
      <img src={client_image1} alt="" />
      <img src={client_image2} alt="" />
      <img src={client_image3} alt="" />
      <img src={client_image4} alt="" />
      <img src={client_image5} alt="" />
        
      </Slider >
        </div>
      
    </div>
  )
}

export default WelcomePage
