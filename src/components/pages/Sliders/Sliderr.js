import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../Sliders/slider1.jpg';
import logo1 from '../Sliders/slider2.jpg';
import logo2 from '../Sliders/slider3.jpg';
import logo3 from '../Sliders/slider5.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Wobble from 'react-reveal/Wobble';
import Flash from 'react-reveal/Flash';
import '../Sliders/SliderStyle.css';

function AboutUs() {
  return (
    <div className='hero'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' src={logo} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={logo1} alt='Third slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={logo2} alt='Third slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={logo3} alt='Third slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutUs;
