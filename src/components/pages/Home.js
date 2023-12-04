import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Background from '../Background';

function Home() {
  return (
    <>
    <div >
      <HeroSection />
      <Background>
      <Cards />
      </Background>
      </div>
    </>
  );
}

export default Home;