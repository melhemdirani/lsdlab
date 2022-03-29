import React, {useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ProgressiveImage from "react-progressive-image-loading";
import ParticlesRender from '../ParticlesRender';

import './Header.styles.scss';
import Nft2 from '../../assets/images/LSD_LAB_NFT_HOME2.png';
import Nft from '../../assets/images/LSD_LAB_NFT_HOME.png';

function Header() {
  useEffect(()=>{
      Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='Header_Container' id='home'>
      <ParticlesRender />
      <ProgressiveImage
        preview={Nft2}
        src={Nft}
        transitionTime={500}
        render={(src, style) => <img src={src} />}
      />
        <div className='c2' >
          <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className='shake' data-aos-once={true}>A MIND-BENDING EXPERIENCE</h2>
          <p data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-delay="200"  data-aos-once={true}>LSD Lab is a first of its kind LSD themed consumable NFT that aims to solidify the presence of psychedelic recreation within the Metaverse.</p>
        </div>
    </div>
  )
}

export default Header