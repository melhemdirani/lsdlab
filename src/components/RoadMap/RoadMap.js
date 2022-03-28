import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './RoadMap.styles.scss';
import Cristal from '../../assets/images/LSD_LAB_CRISTAL.png';

const Icon1 = <h4>25%</h4>
const Icon2 = <h4>50%</h4>
const Icon3 = <h4>75%</h4>
const Icon4 = <h4>100%</h4>
function RoadMap() {
  return (
      <div className='RoadMap_Container' id='RoadMap'>
        <h2>ROAD MAP</h2>
        <div className='subContainer'>
            <img alt='Cristal' src={Cristal} className='cristal'/>
            <VerticalTimeline  className='vertical' layout='1-column-right' >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#4A0372', color: '#fff', opacity: ".8" }}
                    contentArrowStyle={{ display: 'none' }}
                    iconStyle={{ background: '#4A0372', color: 'white' }}
                >
                    <h3>25%</h3>
                    <p>
                        10 pre-sale minters will be chosen to share 25% of the collection's royalty fees, which will be airdropped to them periodically, forever.
                    </p>
                    <p>
                        To increase our notoriety outside of the digital world (IRL), LSD Lab packs containing posters, stickers, and badges will be distributed among pre-sale minters.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ display: 'none' }}
                    iconStyle={{ background: 'white', color: '#4FA2C5' }}
                >
                    <h3>50%</h3>
                    <p>
                        We will purchase a piece of land in the Metaverse to build our own LSD laboratory which will act as a hub for all holders to handout as a community of virtual psychonauts.
                    </p>
                    <p>
                        LSD lab will create a DAO for verified holders. All the DAO decisions will be taken in accordance with our holders; preferences, choises, and votes.    
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#4A0372', color: '#fff', opacity: ".8" }}
                    contentArrowStyle={{ display: 'none' }}
                    iconStyle={{ background: '#4A0372', color: 'white' }}
                >
                    <h3>75%</h3>
                    <p>
                        We will develop our 7 unique virtual worlds in the metaverse that feature live, and interactive landscapes viewable in both 3D VR (360 degree view) and through users'screens, which will vary according to the image (Print) present on each LSD Lab NFT.
                    </p>
                    <p>
                        We will be distributing premium VR headsets to random holders to increase VR accessibility.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'white', color: '#4FA2C5' }}
                    >
                    <h3>100%</h3>
                    <p>
                        Partnerships will be struck with metaverse games and communities where consuming an LSD Lab NFT will induce psychedelic color patterns and a trippy 3D effect.
                    </p>
                    <p>
                        We will make a contribution to an organization, of our holders' choice, that conducts psychedelic-assisted therapies (CPAT).
                    </p>
                    <p>
                        We will be launching the first meeting for our holders to vote regarding further decisions that are to be made relevant to the expansion of our vision.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        
    </div>
  )
}

export default RoadMap