import React from 'react';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = ({
  text,
  size,
  href,
  fullWidth = false,
  disabled = false,
  variant = 'contained',
  marginTop = '10px',
}) => {
  return (
    <Button
      href={href}
      variant={variant}
      sx={{
        'fontFamily': 'BozonBold',
        'marginTop': marginTop,
        'borderRadius': '0px',
        'color': 'white',
        'backgroundColor': '#98C8BB',
        'boxShadow': 'none',
        '&:hover': {
          backgroundColor: '#77b6a5',
          boxShadow: 'none',
        },
      }}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  marginTop: PropTypes.string,
};

export default CustomButton;
