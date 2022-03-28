import React from 'react';

import './Footer.styles.scss';
import Sun from '../../assets/images/Sun.png'
import Welcome from '../Welcome';

function Footer() {
  return (
    <div className='Footer_Container'>
        <img alt="sun" src={Sun} className='sun'/>
        <Welcome />
    </div>
  )
}

export default Footer