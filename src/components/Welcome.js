import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

export default function Welcome() {
    const [view, setView] = useState(false)
    const { ref, inView } = useInView({
      threshold: .4,
    });

    useEffect(()=>{
        if(inView){
          if(view){
            return
          } else {
            setView(true)
          }
        }
    }, [inView])
     
  return (
    <div ref={ref} className='Welcome_Container'>
      { view && <Typewriter
        options={{
            wrapperClassName: 'p',
            cursorClassName: 'p',
            cursor: '',
            delay: '80',
            autoStart: false,
        }}
        onInit={(typewriter) => {
            typewriter.typeString('WELCOME TO THE FUTURE, HOP ON AND HAVE AN AWESOME VISUAL EXPERIENCE.')
            .start();
        }}
    />}
    </div>
  )
}
