import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos';
import Typewriter from 'typewriter-effect';

import Power from '../../assets/images/Power plant mini.webp';
import Purple from '../../assets/images/Purpleboard.webp';
import mushroom from '../../assets/images/mushroom mini.webp';
import ship from '../../assets/images/space ship.webp';
import ripples from '../../assets/images/Water ripples mini.webp';
import './Team.styles.scss';

const TeamMember = ({image, position, Name, view}) => {
  return(
    <div className='TeamMember_Container'>
      <img alt="" src={image} className='memberImage'/>
      <div className='memberInfo'>
        { view &&
          <>
            <Typewriter
              options={{
                  wrapperClassName: 'p',
                  cursorClassName: 'p',
                  cursor: '',
                  delay: '150',
                  autoStart: false,
              }}
              onInit={(typewriter) => {
                  typewriter.typeString(Name)
                  .start();
              }}
            />
            <Typewriter
                options={{
                  wrapperClassName: 'p',
                  cursorClassName: 'p',
                  cursor: '',
                  delay: '100',
                  autoStart: false,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString(position)
                  .start();
                }}
            />
          </>
        }
        </div>
    </div>
  )
}

function Team() {

  const [view, setView] = useState(false)
  const { ref, inView } = useInView({
    threshold: .6,
  });

  useEffect(()=>{
    Aos.init({ duration: 1000 });
  }, [])
  
  useEffect(()=>{
    if(inView){
      if(view){
        return
      } else {
        setView(true)
      }
    }
  }, [inView])

  const TeamMembers = [
    {Name: 'TEK', position:'Co-founder & Creative director' ,  image: Power },
    {Name: 'SKUKU', position:'Co-founder & Marketing genius' ,  image: mushroom },
    {Name: 'ED', position:'Co-founder & Blockchain specialist' ,  image: ship },
    {Name: 'RAF', position:'Art Director' ,  image: ripples },
  ]
  return (
    <div className='Team_Container' ref={ref}>
      <h2 data-aos="fade-up" data-aos-easing="ease-in-sine" className='shake' data-aos-once={true}>THE PSYCHONAUT TEAM</h2>
        <img  src={Purple} alt="nft" className='purple_bg'/>
      <div className='teamMembers'>
        {
          TeamMembers && TeamMembers.map((member, i) =>
              < TeamMember image={member.image} Name={member.Name} position={member.position} view={view} key={i}/> 
          )
        }
        
      </div>
    </div>
  )
}

export default Team