import React from 'react';
import {
  Typography,
  Grid,
  Avatar,
} from '@mui/material';
import PropTypes from 'prop-types';
import './detail-view.scss';
import Page from '../Page/Page';

const DetailView = ({matches, imageTop, imageDown, title, children}) => {
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
        className="info-container"
      >
        <Grid item xs={12} md={5}>
          <Avatar
            src={imageDown}
            variant="square"
            sx={{
              width: '100%',
              height: '80vh',
              border: 'solid #98C8BB',
            }}
          />
        </Grid>
        <Grid item md={1} className="v-line-container">
          {!matches && <div className="v-line" />}
        </Grid>
        {children}
      </Grid>
    </div>
  );
};

DetailView.propTypes = {
  matches: PropTypes.bool,
  children: PropTypes.object,
  imageDown: PropTypes.string,
  imageTop: PropTypes.string,
  title: PropTypes.string,
};

export default DetailView;
