import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselImg } from '../../../assets/images';

import './style.scss';

const HomePageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: true,
  };

  const slides = [
    {
      title: 'Slide 1',
      image: carouselImg,
    },
    {
      title: 'Slide 2',
      image: carouselImg,
    },
    {
      title: 'Slide 3',
      image: carouselImg,
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
          <div style = {{backgroundImage: slide.image }}>{slide.title}</div>
      ))}
    </Slider>
  );
};

export default HomePageSlider;

