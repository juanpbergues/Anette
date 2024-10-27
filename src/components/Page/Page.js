import React from 'react';
import PropTypes from 'prop-types';

const Page = ({
  image,
  fullScreen,
}) => {
  return (
    <img
      src={image}
      style={fullScreen ? {
        'width': '1020px',
        'height': '100%',
        'aspectRatio': '4 / 3',
      }:{
        'maxWidth': '807px',
        'height': '100%',
        'aspectRatio': '3 / 2',
      }}
    />
  );
};

Page.propTypes = {
  image: PropTypes.string,
  fullScreen: PropTypes.bool,
};

export default Page;
