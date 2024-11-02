/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import WebviewCarousel from './WebviewCarousel/WebviewCarousel';
import MobileCarousel from './MobileCarousel/MobileCarousel';

import './carousel.scss';

const Carousel = ({matches, fullScreen}) => {
  const defaultClassName = matches ? 'carousel-container-mobile' : 'carousel-container';
  return (
    <div className={defaultClassName}>
      {!matches ? (
        <WebviewCarousel fullScreen={fullScreen} />
        ):(
        <MobileCarousel/>
        )}
    </div>
  );
};

Carousel.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Carousel;
