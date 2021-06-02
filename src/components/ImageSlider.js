import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import sliderOne from "../images/slider-badging.jpg";
import sliderTwo from "../images/slider-badag.jpg";
import sliderThree from "../images/slider-scale.jpg";

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  padding: 10px;
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: border 150ms linear 0s;

    &:hover {
      border: 4px solid rgba(255, 255, 255, 0.6);
    }
  }
`;

const ImageSlider = () => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...setting}>
      <Wrap>
        <img alt="slider-1" src={sliderOne}></img>
      </Wrap>
      <Wrap>
        <img alt="slider-2" src={sliderTwo}></img>
      </Wrap>
      <Wrap>
        <img alt="slider-3" src={sliderThree}></img>
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;
