/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import WebviewCarousel from './WebviewCarousel/WebviewCarousel';

import './carousel.scss';
import MobileCarousel from './MobileCarousel/MobileCarousel';

const Carousel = ({matches}) => {
  const defaultClassName = matches ? 'carousel-container-mobile' : 'carousel-container';
  return (
    <div className={defaultClassName}>
      {!matches ? (
        <WebviewCarousel matches={matches}/>
        ):(
        <MobileCarousel matches={matches}/>
        )}
    </div>
  );
};

Carousel.propTypes = {
  image: PropTypes.string,
  matches: PropTypes.bool,
};

export default Carousel;
