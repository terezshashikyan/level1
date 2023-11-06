import Slider from "react-slick";
import { slides } from "./constants";
import { ArrowLeft, ArrowRight } from "../../../assets/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

const HomePageSlider: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const slidesRenderer = slides.map((slide) => (
    <div className="homePageSlider__slide" key = {slide.id}>
      <img className = 'homePageSlider__img' src={slide.image} />
      <h3 className = 'homePageSlider__text container'>{slide.title}</h3>
    </div>
  ));

  return <Slider {...settings}>{slidesRenderer}</Slider>;
};

export default HomePageSlider;
