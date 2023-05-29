import React from 'react';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';
import './custom-button.scss';

const CustomButton = ({text, color, hoverColor, size, href}) => {
  return (
    <Button
      variant="outlined"
      color={color}
      sx={{
        'borderRadius': '0px',
        'border': `2px solid`,
        '&:hover': {
          color: hoverColor,
          border: `2px solid ${hoverColor}`,
        },
      }}
      href={href}
      size={size}
    >
      <b>
        {text}
      </b>
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
};

export default CustomButton;
