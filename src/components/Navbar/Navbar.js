import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

import './Navbar.styles.scss';
import Logo from '../../assets/images/LSD_LAB_LOGO.png';
import Menu from '../../assets/images/menu.png'
import useWindowDimensions from '../useWindowDimensions';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import Discord from '../../assets/images/discord.png';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
} 

const NavbarItems = ({styling, functions}) => {

  return(
    <div className={styling}  onClick={functions}>
      
      <HashLink to="#home" scroll={el => scrollWithOffset(el)} data-aos={"fade-left"} data-aos-easing="ease-in-sine"  data-aos-delay="200"  data-aos-once={true}>Home</HashLink>
      <HashLink to="#About" scroll={el => scrollWithOffset(el)} data-aos={"fade-left"} data-aos-easing="ease-in-sine"  data-aos-delay="300"  data-aos-once={true} >About</HashLink>
      <HashLink to="#Virtual" scroll={el => scrollWithOffset(el)} data-aos={"fade-left"} data-aos-easing="ease-in-sine"  data-aos-delay="400"  data-aos-once={true}>Virtual World</HashLink>
      <HashLink to="#Utility" scroll={el => scrollWithOffset(el)} data-aos={"fade-left"} data-aos-easing="ease-in-sine"  data-aos-delay="500"  data-aos-once={true} >Utility</HashLink>
      <HashLink to="#RoadMap" scroll={el => scrollWithOffset(el)} data-aos={"fade-left"} data-aos-easing="ease-in-sine"  data-aos-delay="600"  data-aos-once={true}>RoadMap</HashLink>
      <a to="#home" href='https://twitter.com/LSDLabNFT' target="_blank" rel="noopener noreferrer" scroll={el => scrollWithOffset(el)}  data-aos={styling === 'navigation_mobile' && "fade-up"} data-aos-easing="ease-in-sine"  data-aos-delay="600"  data-aos-once={true}>
        <img alt="" src={Twitter} className='social'/>
      </a>
      <a to="#home" href='https://www.instagram.com/lsdlabnft/' target="_blank" rel="noopener noreferrer" scroll={el => scrollWithOffset(el)}  data-aos={styling === 'navigation_mobile' && "fade-up"} data-aos-easing="ease-in-sine"  data-aos-delay="600"  data-aos-once={true}>
        <img alt="" src={Instagram} className='social'/>
      </a>
      <a to="#home" href='https://discord.com/invite/JTxM2w6j5p' target="_blank" rel="noopener noreferrer" scroll={el => scrollWithOffset(el)}  data-aos={styling === 'navigation_mobile' && "fade-up"} data-aos-easing="ease-in-sine"  data-aos-delay="600"  data-aos-once={true}>
        <img alt="" src={Discord} className='social'/>
      </a>
    </div>
  )
}

function Navbar() {

    useEffect(()=>{
      Aos.init({ duration: 1000 })
  }, [])

  const [showMenu, setShowMenu] = useState(false)

  const { width } = useWindowDimensions();

  const handleMenuClick = () => {
      setShowMenu(!showMenu)
  }
  const closeMenu = () => {
    if(showMenu){
      setShowMenu(false)
    }
  }
  return (
    <div className='Navbar_Container' >
        <HashLink to="#home" scroll={el => scrollWithOffset(el)} >
          <img alt="lsdlab" src={Logo} className='logo'/>
        </HashLink>
        {
          width > 600
          ? <NavbarItems styling='navigation' />
          : <img alt="" src={Menu} className='Menu' onClick={handleMenuClick}/>
        }
        {
          width < 600 && showMenu && <NavbarItems styling='navigation_mobile' functions={closeMenu} />
        }
        
    </div>
  )
}

export default Navbar