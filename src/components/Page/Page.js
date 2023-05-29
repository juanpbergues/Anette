import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';

const Page = ({image, matches}) => {
  return (
    <Avatar
      src={image}
      variant="square"
      sx={!matches ? ({
        'width': 'auto',
        'height': '100vh',
      }):(
        {
          'width': '90%',
          'height': '70vh',
        }
      )}
    />
  );
};

Page.propTypes = {
  image: PropTypes.string,
  matches: PropTypes.bool,
};

export default Page;
