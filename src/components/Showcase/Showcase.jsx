import React from 'react';
import './Showcase.css'
import showcase1 from '../../assets/showcase1.webp'
import showcase2 from '../../assets/showcase2.webp'
import showcase3 from '../../assets/showcase3.webp'
import showcase4 from '../../assets/showcase4.webp'
import showcase5 from '../../assets/showcase5.webp'
import showcase6 from '../../assets/Showcase6.webp'

import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Showcase = () => {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            centerPadding: "60px",
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
            ]
            
        };
    return (
      <div className="slide">
        
        <Slider {...settings} className='slide-con'>
        <img src={showcase1} alt="" />
        <img src={showcase2} alt="" />
        <img src={showcase3} alt="" />
        <img src={showcase4} alt="" />
        <img src={showcase5} alt="" />
        <img src={showcase6} alt="" />
    </Slider>
      </div>
    )
}
export default Showcase