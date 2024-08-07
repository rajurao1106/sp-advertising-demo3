import React from 'react'
import './Blog.css'
import update_image from '../../assets/brand.jpg'
import img1 from '../../assets/img11.jpeg'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
import img6 from '../../assets/img6.webp'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className='blog'>
      <div className="blog-con">
        <div className="new-update">
            
            <div className="headline">
                <div className="headline-con">
                <h1>The Significance of Branding in Digital Marketing</h1>
                <h2>Exploring how a strong brand identity can impact
                your digital marketing efforts and overall online 
                presence. Discussing the significance of content marketing
                and providing tips on creating and distributing high-quality content.</h2>
                </div>
            </div>
            <div className="update-image">
                <img src={update_image} alt="" />
            </div>
        </div>
      </div>
      <div className="articles">
        <div className="article-search">
            <h1>Latest articles</h1>
            <div className="topics">
                {/* <button>All</button>
                <button>Branding</button>
                <button>Development</button>
                <button>Design</button> */}
            </div>
        </div>
        <div className="latest-article">
        <Link to={"/Outdoor-Advertising"} className="article-box">
                <div className="img-text">
                    
                    <img src={img1} alt="" />
                    <h3>Capturing Attention On-the-Go: The Power of Outdoor Advertising in Public Spaces</h3>
                </div>
                <p>Read More</p>
            </Link>
            <Link to={"/Digital-Marketing"} className="article-box">
                <div className="img-text">
                    <img src={img2} alt="" />
                    <h3>Connecting Brands with Audiences: Digital Marketing Strategies for Enhanced Engagement</h3>
                </div>
                <p>Read More</p>
            </Link>
            <Link to={"/Designing-Services"} className="article-box">
                <div className="img-text">
                    <img src={img3} alt="" />
                    <h3>Visual Storytelling: Designing Services for Enhanced Brand Identity and User Experience</h3>
                </div>
                <p>Read More</p>
            </Link>
            <Link to={"/Print-Media"} className="article-box">
                <div className="img-text">
                    <img src={img5} alt="" />
                    <h3>Crafting Unique Brand Identities: Strategic Planning for Long-Term Success</h3>
                </div>
                <p>Read More</p>
            </Link>
            <Link to={"/Branding-Strategy"} className="article-box">
                <div className="img-text">
                    <img src={img4} alt="" />
                    <h3>Tangible Impact: The Enduring Power of Print Media in Advertising</h3>
                </div>
                <p>Read More</p>
            </Link>
            <Link to={"/Event-Promotion"} className="article-box">
                <div className="img-text">
                    <img src={img6} alt="" />
                    <h3>Driving Engagement and Attendance: Effective Strategies for Event Promotion</h3>
                </div>
                <p>Read More</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog
