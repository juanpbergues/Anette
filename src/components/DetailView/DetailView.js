import React from 'react';
import {
  Typography,
  Grid,
  Avatar,
} from '@mui/material';
import PropTypes from 'prop-types';
import './detail-view.scss';
import Page from '../Page/Page';
import {useEffect} from 'react';
import {useLocation} from 'react-router';

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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="detail-view-section">
      <div className="detail-view-container">
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
          width: '85%',
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
              }:{
                width: '98%',
                height: '70vh',
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
