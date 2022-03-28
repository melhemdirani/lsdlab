import React, {useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ProgressiveImage from 'react-progressive-graceful-image';

import './Header.styles.scss';
import Nft from '../../assets/images/LSD_LAB_NFT_HOME.webp';
import Nft2 from '../../assets/images/LSD_LAB_NFT_HOME.png';

function Header() {
  useEffect(()=>{
      Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='Header_Container' id='home'>
      <ProgressiveImage src={Nft} placeholder={Nft2}>
        {(src, loading) => (
          <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />
        )}
      </ProgressiveImage>
        <div className='c2' >
          <h2 data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-once={true}>A MIND-BENDING EXPERIENCE</h2>
          <p data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-delay="200"  data-aos-once={true}>LSD Lab is a first of its kind LSD themed consumable NFT that aims to solidify the presence of psychedelic recreation within the Metaverse.</p>
        </div>
    </div>
  )
}

export default Header