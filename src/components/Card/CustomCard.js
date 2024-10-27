import React from 'react';

import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

import {useNavigationStore} from '../../stores/useNavigationStore';
import {
  CardActionArea,
  Card,
  Typography,
} from '@mui/material';

import './custom-card.scss';

const CustomCard = ({title, id, to, matches, fullScreen, mediumScreen}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'custom-card-mobile';
    }
    if (fullScreen) {
      return 'custom-card-full-screen';
    }
    return 'custom-card';
  };

  const defaultClassName = getDefaultClassName();

  const setPrimary = useNavigationStore((state) => state.setPrimary);
  const setSecondary = useNavigationStore((state) => state.setSecondary);

  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };
  return (
    <div
      className={defaultClassName}
      style={{marginTop: mediumScreen ? '30px' : '0'}}
    >
      <Card sx={{
        borderRadius: 0,
        boxShadow: 0,
      }}>
        <CardActionArea onClick={() => {
          handleClick(to);
          setPrimary('patisserie');
          setSecondary(id);
        }}>
          <div
            className={`${defaultClassName}__media-${id}`}
          />
          <div className={`${defaultClassName}__title-container`}>
            <Typography
              color="secondary"
              variant="h5"
              sx={fullScreen ? {
                fontFamily: 'Chequersdemo',
                fontSize: '22px',
                lineHeight: '25px',
              } : {
                fontFamily: 'Chequersdemo',
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              {title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

CustomCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
  mediumScreen: PropTypes.bool,
};

export default CustomCard;
