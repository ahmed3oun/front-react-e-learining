import React from 'react';
import { Route } from 'react-router-dom';
import AllLevels from '../Level/AllLevels';
import About from './About';
import Contact from './Contact';
import Slider from './Slider';
import Sliderr from '../pages/Sliders/Sliderr';
import OurTeam from './OurTeam';
import Footer from './Footer';
import NavDash from './Dashboard/NavDash';
import LevelsHome from '../Level/LevelsHome';

const Home = () => {
  return (
    <div>
      <Sliderr />
      <About />
      <LevelsHome />
      <OurTeam />
      <Contact />
      <Footer />
      {/* <NavDash/> */}
    </div>
  );
};

export default Home;
