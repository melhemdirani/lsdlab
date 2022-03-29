import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';


import Lab from '../../assets/images/lab.webp';
import Application from '../../assets/images/application.webp';
import UtilityCommunity from '../../assets/images/utility community.webp';
import Voting from '../../assets/images/voting.webp';
import Partnerships from '../../assets/images/partnerships.webp';

import './Utility.styles.scss';
const Card = ({text, image}) => {
    return(
        <div className='Utitlity_Card'>
            <img alt={text} src={image} className='image'/>
            <p>{text}</p>
        </div>
    )
}

function Utility() {

    useEffect(()=>{
        Aos.init({ duration: 1000 })
    }, [])

    const items = [
        {image: Lab, text:"Interactive 3D virtual worlds" },
        {image: Application, text:"Building our laboratory in the Metaverse" },
        {image: UtilityCommunity, text:"Giving back to the community" },
        {image: Partnerships, text:"Partnerships with Metaverse games and projects" },
        {image: Voting, text:"Full commercial & voting rights" },
    ]
  return (
    <div className='Utility_Container' id='Utility'>
        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-once={true} >UTILITY</h2>
        <div className='utilities' data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-delay="200"  data-aos-once={true}>
            {
                items && items.map((item, i) => <Card text={item.text} image={item.image}  key={i} />)
            }
        </div>
    </div>
  )
}

export default Utility