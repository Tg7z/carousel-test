import React, { PropTypes } from 'react';
import { carouselSlide as carouselSlideStyle } from '../styles/carousel';

// {backgroundImage: props.imgSrc}

function parseSlideStyles({ imgSrc, activeIndex }) {
  return { ...carouselSlideStyle, left: `-${400 * activeIndex}px`, backgroundImage: `url(${imgSrc})` }
}

const Button = props => (
  <li className="carousel__slide" style={parseSlideStyles(props)} />
);

Button.propTypes = {
  imgSrc: PropTypes.string,
};

export default Button;
