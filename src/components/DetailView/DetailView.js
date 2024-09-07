import React from 'react';
import {useEffect} from 'react';

import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  Avatar,
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
  separator,
  children,
}) => {
  const defaultClassName = matches ? 'detail-view-mobile' : 'detail-view';

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
              <Page image={imageTop} matches={matches} />
            </div>
          </div>
          <Typography
            color="secondary"
            gutterBottom
            variant="h4"
            align="center"
            className="title"
          >
            {title}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={`info-container-${id === 'tortas' ? 'tortas' : 'other'}`}
            sx={matches ? {
              width: '100%',
              paddingLeft: '16px',
              paddingRight: '16px',
            } : {
              width: '1024px',
            }}
          >
            {show && (
              <Grid item xs={12} md={6}>
                <Avatar
                  src={imageDown}
                  variant="square"
                  sx={!matches ? {
                    width: '460px',
                    height: '575px',
                    border: 'solid #98C8BB',
                    objectFit: 'fill',
                  } : {
                    width: '98%',
                    height: '50vh',
                    border: 'solid #98C8BB',
                  }}
                />
              </Grid>
            )}
            {separator && (<Grid item md={1} className="v-line-container">
              {!matches && <div className="v-line" />}
            </Grid>)}
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
};

export default DetailView;
