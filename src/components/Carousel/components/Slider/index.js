/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  &:hover button.slick-arrow {
    display: block !important;
    @media (max-width: 800px) {
      display: none !important;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-arrow {
    background-color: rgb(20 20 20 / 55%);
    min-height: 100%;
    width: 70px;
    display: none !important;
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }

  li button::before{
    color: white;
  }
  
  li.slick-active button::before{
    color: red;
  }
`;

export const SliderItem = styled.li`
  margin-right: 5px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 1000,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      swipe: false,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 700,
            swipe: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 700,
            swipe: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 250,
            swipe: true,
          },
        },
      ],
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
