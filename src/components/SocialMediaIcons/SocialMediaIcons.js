import React from 'react';

import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import Discord from '../../assets/images/discord.png';
import './SocialMediaIcons.styles.scss';

export default function SocialMediaIcons() {
  return (
    <div className='SocialMediaIcons_Container'>
      <a 
        href='https://twitter.com/LSDLabNFT' 
        target="_blank" 
        rel="noopener noreferrer" 
      >
          <img alt="" src={Twitter} />
      </a>
      <a 
        href='https://www.instagram.com/lsdlab_nft/' 
        target="_blank" 
        rel="noopener noreferrer" 
      >
          <img alt="" src={Instagram} />
      </a>
      <a 
        href='https://discord.com/invite/JTxM2w6j5p' 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <img alt="" src={Discord} />
      </a>
    </div>
  )
}
