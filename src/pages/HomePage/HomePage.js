import React from 'react';
import About from '../../components/About/About';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Utility from '../../components/Utility/Utility';
import RoadMap from '../../components/RoadMap/RoadMap';
import VirtualWorlds from '../../components/VirtualWorlds/VirtualWorlds';
import Team from '../../components/Team/Team';
import FAQ from '../../components/FAQ/FAQ';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <VirtualWorlds />
      <Utility />
      <RoadMap />
      <Team />
      <FAQ />
      <Subscribe />
    </div>
  )
}

export default HomePage