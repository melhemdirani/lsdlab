import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

import './Subscribe.styles.scss';
import Welcome from '../Welcome';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import Logo from '../../assets/images/LSD_LAB_LOGO.png';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
} 

function Subscribe() {
  
  const [email, setEmail] = useState("")
  useEffect(()=>{
    Aos.init({ duration: 1000 });
  }, [])
  
  const handleButtonClick = (e) => {
    e.preventDefault()
    setTimeout(1000, alert("You are now subscribed"))
    setEmail("")
  }

  return (
    <div className='Subscribe_Container'>
      <div data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-once={true}>
        <h2>Subscribe</h2>
        <form onSubmit={handleButtonClick}>
            <input 
              type="email" 
              placeholder='Enter Your Email Address...' 
              className='input' 
              required value={email} 
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <button type='submit'>Register</button>
        </form>
      </div>
      <div />
      <div />
      <div className='typewriter'>
        <Welcome />
      </div>
      <div className='footer'>
          <HashLink to="#home" scroll={el => scrollWithOffset(el)} href="#home">
            <img alt="lsdlab" src={Logo} className='logo'/>
          </HashLink>
          <SocialMediaIcons />
      </div>
    </div>
  )
}

export default Subscribe