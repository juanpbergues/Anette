import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';

const Page = ({image, matches}) => {
  return (
    <Avatar
      src={image}
      variant="square"
      sx={!matches ? ({
        'width': '1020px',
        'height': '650px',
      }):(
        {
          'width': '80%',
          'height': '50vh',
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
