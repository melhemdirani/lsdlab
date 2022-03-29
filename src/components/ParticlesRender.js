import React from 'react'
import Particles from "react-tsparticles";

function ParticlesRender() {
  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      number: {
        value: 20,
        limit: 300,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#FEFD8A"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "images/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.5,
          sync: false
        }
      },
      size: {
        value: 7,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 1,
          sync: false
        }
      },
      links: {
        enable: false
      },
      move: {
        enable: true,
        speed: .4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 100,
          duration: 2,
          opacity: 1,
          speed: 2
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    detectRetina: true,
    fpsLimit: 60,
  }
  return (
    <Particles className='particles'
        options={particlesOptions}
      />
  )
}

export default ParticlesRender