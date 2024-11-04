import React from 'react';
import {useEffect} from 'react';

import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
} from '@mui/material';
import {useLocation} from 'react-router';

import Page from '../Page/Page';
import CarouselTortas from './Carousels/CarouselTortas';
import CarouselTravelCakes from './Carousels/CarouselTravelCakes';
import CarouselCookies from './Carousels/CarouselCookies';
import CarouselTartasClasicas from './Carousels/CarouselTartasClasicas';
import CarouselMacarons from './Carousels/CarouselMacarons';
import CarouselModernas from './Carousels/CarouselModernas';

import './detail-view.scss';


const DetailView = ({
  id,
  matches,
  imageTop,
  imageDown,
  title,
  show,
  children,
  fullScreen,
  subtitle = '',
  description = '',
}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'detail-view-mobile';
    }
    if (fullScreen) {
      return 'detail-view-full-screen';
    }
    return 'detail-view';
  };

  const defaultClassName = getDefaultClassName();

  const location = useLocation();

  const getCategoryToRender = (id) => {
    if (id === 'tortas') {
      return (<CarouselTortas />);
    }
    if (id === 'tartas-clasicas') {
      return (<CarouselTartasClasicas />);
    }
    if (id === 'macarons') {
      return (<CarouselMacarons />);
    }
    if (id === 'cookies') {
      return (<CarouselCookies />);
    }
    if (id === 'tortas-modernas') {
      return (<CarouselModernas />);
    }
    if (id === 'travel-cakes') {
      return (<CarouselTravelCakes />);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {matches ? (
        <div className={`${defaultClassName}-section`}>
          <div className={`${defaultClassName}-container`}>
            <div className="image-container">
              {getCategoryToRender(id)}
            </div>
          </div>
          <Typography
            color="secondary"
            gutterBottom
            variant="h4"
            align="center"
            className="title-mobile"
          >
            {title}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={`info-container-${id === 'tortas' ? 'tortas' : 'other'}`}
            sx={{
              width: '100%',
              paddingLeft: '16px',
              paddingRight: '16px',
            }}
          >
            {children}
          </Grid>
        </div>
      ) : (
        <div className={`${defaultClassName}-section`}>
          <div className={`${defaultClassName}-container`}>
            <div className="image-container">
              <Page image={imageTop} fullScreen={fullScreen} />
            </div>
          </div>
          <div style={{width: '100%', display: 'flex', placeContent: 'center'}}>
            <div
              style={
                {width: fullScreen ? '1020px' : '807px', marginLeft: '16px'}
              }
            >
              <Typography
                color="secondary"
                gutterBottom
                variant="h4"
                align="center"
                className="title"
                sx={{marginBottom: !description ? '40px' : '0'}}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h4"
                  align="left"
                  className="subtitle"
                >
                  {subtitle}
                </Typography>
              )}
              {description && (
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h4"
                  align="justify"
                  className="description"
                >
                  {description}
                </Typography>
              )}
            </div>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={`info-container-${id === 'tortas' ? 'tortas' : 'other'}`}
            sx={fullScreen ? {
              width: '1024px',
            } : {
              width: '807px',
            }}
          >
            {show && (
              <Grid item xs={12} md={6}>
                <img
                  src={imageDown}
                  style={fullScreen ? {
                    width: '460px',
                    height: '100%',
                    border: 'solid #98C8BB',
                    aspectRatio: '3 / 4',
                  } : {
                    width: '380px',
                    height: '100%',
                    aspectRatio: '3 / 4',
                    border: 'solid #98C8BB',
                  }}
                />
              </Grid>
            )}
            {children}
          </Grid>
        </div>
      )}
    </>
  );
};

DetailView.propTypes = {
  matches: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.object,
  imageDown: PropTypes.string,
  imageTop: PropTypes.string,
  title: PropTypes.string,
  show: PropTypes.bool,
  separator: PropTypes.bool,
  fullScreen: PropTypes.bool,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default DetailView;
