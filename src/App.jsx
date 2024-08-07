import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import ScrollEffect from './components/ScrollEffect/ScrollEffect'
import Footer from './components/Footer/Footer'
import WelcomePage from './components/WelcomePage/WelcomePage'
import ChooseUs from './components/ChooseUs/ChooseUs'
import Contact from './components/Contact/Contact'
import Showcase from './components/Showcase/Showcase'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import { Outlet, Route, Routes} from 'react-router-dom'
import DigitalMarketing from './components/Services/DigitalMarketing'
import OutdoorAdvertising from './components/Services/OutdoorAdvertising'
import DesigningServices from './components/Services/DesigningServices'
import PrintMedia from './components/Services/PrintMedia'
import BrandingStrategy from './components/Services/BrandingStrategy'
import EventPromotion from './components/Services/EventPromotion'
import Blog from './components/Blog/Blog'
import useScrollToTop from './useScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useScrollToTop();

  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='/choose-us' element={<ChooseUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/footer"element={<Footer/>}/>
          <Route path="/"element={<Home/>} />
          <Route path="/navbar"element={<Navbar/>}/>
          <Route path="/read-more"element={<ScrollEffect/>}/>
          <Route path="/showcase"element={<Showcase/>}/>
          <Route path="/welcome-page"element={<WelcomePage/>}/>
          <Route path="/services"element={<WhatWeDo/>}/>
          <Route path="/Outdoor-Advertising"element={<OutdoorAdvertising/>}/>
          <Route path="/Digital-Marketing"element={<DigitalMarketing/>}/>
          <Route path="/Designing-Services"element={<DesigningServices/>}/>
          <Route path="/Print-Media"element={<PrintMedia/>}/>
          <Route path="/Branding-Strategy"element={<BrandingStrategy/>}/>
          <Route path="/Event-Promotion"element={<EventPromotion/>}/>
          <Route path="/Blog"element={<Blog/>}/>
        </Routes>
        
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default App