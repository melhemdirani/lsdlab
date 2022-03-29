import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

import './About.styles.scss';
import Shroom from '../../assets/images/LSD_ABOUT_NFT.png';
import WhitePaper from '../../assets/images/white paper.png';


function About() {
    useEffect(()=>{
        Aos.init({ duration: 1000 })
    }, [])
  return (
    <div className='About_Container' id='About'>
        <div className='c1'>
            <h2 className='h2 shake' data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-delay="200"  data-aos-once={true}>
                ABOUT
                <img alt="whitepaper" src={WhitePaper} className='whitepaper'/>
            </h2>
            <p className='p' data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-once={true} >
                LSD Lab is a collection of 5,555 virtual LSD tabs on the Ethereum blockchain.
            </p>
            <p className='p' data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-delay="200"  data-aos-once={true}>
                Each LSD Lab NFT will grant holders access to their own unique virtual world which will vary according to the traits present on their NFT.
            </p>
        </div>
       <img alt="" src={Shroom} className='image'/>
    </div>
  )
}

export default About