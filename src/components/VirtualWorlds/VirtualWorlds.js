import React, { useState, useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ProgressiveImage from "react-progressive-image-loading";

import Lego from '../../assets/images/Lego stitch.png'
import Lego2 from '../../assets/images/Lego stitch2.png'
import Main from '../../assets/images/main stitch.png'
import Main2 from '../../assets/images/main stitch2.png'
import Organic from '../../assets/images/organic stitch.png'
import Organic2 from '../../assets/images/organic stitch2.png'
import Standard from '../../assets/images/standard stitch.png'
import Standard2 from '../../assets/images/standard stitch2.png'
import Straight from '../../assets/images/straight.png'
import Straight2 from '../../assets/images/straight2.png'
import Right from '../../assets/images/right.svg'
import Left from '../../assets/images/left.svg'

import './VirtualWorlds.styles.scss';

function VirtualWorlds() {

    const [index, setIndex] = useState(4)
    const [stop, setStop] = useState(false)

    let images = [
        {item:Lego, progressive: Lego2, id: 0}, 
        {item: Main, progressive: Main2, id: 1 },  
        {item: Organic, progressive: Organic2, id:2}, 
        {item: Standard, progressive: Standard2, id:3}, 
        {item: Straight, progressive: Straight2, id: 4}
    ]
    const handleImageClick = ({image}) => {
        let id = image.id
        setIndex(id)
    }

    useEffect(()=>{
        Aos.init({ duration: 1000 })
    }, [])

    // useEffect(() => {    const interval = setInterval(() => { if(!stop){ handleNextClick()} }, 2000); return () => clearInterval(interval);}, [index]);

    const handlePreviousClick = () => {
        if(index === 0){
            return (setIndex(images.length - 1))
        } else {
            setIndex(index - 1)
        }
    }
    const handleNextClick = () => {
        if(index === images.length - 1){
            return (setIndex(0))
        } else {
            setIndex(index + 1)
        }
    }
    const stopImageRendering = () => {
        if(!stop){
            setStop(true)
        }
    }
    return (
    <div className='VirtualWorlds_Container' data-aos="fade-up" data-aos-easing="ease-in-sine"  id='Virtual'onClick={stopImageRendering} >
        <h2 data-aos="fade-up" data-aos-easing="ease-in-sine"    data-aos-once={true} className='shake'>Virtual Worlds</h2>
        <p data-aos="fade-up" data-aos-easing="ease-in-sine"    data-aos-once={true}>Holders will journey through an immersive trip environment which will allow them to navigate through, discover, and interact with their surroundings. Each virtual world features live, and interactive landscapes that vary according to the image (Print) present on each LSD Lab NFT.</p>
        <div 
            className='chosenImage' 
            data-aos="fade-up" 
            data-aos-easing="ease-in-sine"  
            data-aos-once={true}
        >   
            <button onClick={handlePreviousClick}><img alt="" src={Left} className='arrow'/></button>
             <img src={images[index].item} className='mainImage'/>
            <button onClick={handleNextClick}><img alt="" src={Right} className='arrow'/></button>
        </div>
        <p  className='title'>{index === 4 && "SHROOMHILLZ"}</p>
        <div className='renderedImages'  data-aos-once={true}>
            {
                images&&images.map(image => 
                    <img 
                        src={image.progressive} 
                        alt="nft" key={image.id} 
                        className={image.id === index ? 'images' : 'images shallow' } 
                        onClick={() => handleImageClick({image})}
                    />
                )
            }
        </div>
    </div>
  )
}

export default VirtualWorlds