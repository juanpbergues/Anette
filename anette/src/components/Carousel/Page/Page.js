import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Page = ({image}) => {
  return (
    <Box
      sx={{
        'width': '85%',
        'height': '80vh',
        'backgroundImage': `url(${image})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
      }}
    />
  );
};

Page.propTypes = {
  image: PropTypes.string,
};

export default Page;
