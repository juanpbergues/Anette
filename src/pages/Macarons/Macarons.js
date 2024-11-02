/* eslint-disable max-len */
import React from 'react';

import PropTypes from 'prop-types';
import {
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import DetailView from '../../components/DetailView/DetailView';
import CustomButton from '../../components/CustomButton/CustomButton';

import ImageTop from '../../assets/annete-detail-banner-macarons-normal.jpg';
import ImageTopFull from '../../assets/annete-detail-banner-macarons-full.jpg';
import ImageDown from '../../assets/annete-detail-inferior-macarons.jpg';

import './macarons.scss';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: 'Chocolate',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 2,
      text: 'Pistacho',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 3,
      text: 'Avellana',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 4,
      text: 'Caramelo',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 5,
      text: 'Vanilla',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 6,
      text: 'Café',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 7,
      text: 'Frambuesa',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 8,
      text: 'Arándano',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 9,
      text: 'Cassis',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
    {
      id: 10,
      text: 'Maracuyá',
      color: '#98C8BB',
      price: '$40.000 x 6u',
    },
  ],
};

const Macarons = ({matches, fullScreen}) => {
  // const defaultClassName = 'macarons';
  return (
    <DetailView
      matches={matches}
      title="MACARONS"
      imageTop={fullScreen ? ImageTopFull : ImageTop}
      imageDown={ImageDown}
      show
      id="macarons"
      fullScreen={fullScreen}
    >
      <Grid item xs={12} md={6} sx={!matches && {paddingLeft: '16px'}}>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          color={content.title.color}
          className="secondary-title"
          sx={matches ? {
            fontFamily: 'BozonBold',
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: '18px',
            marginTop: '40px',
          } : {
            fontFamily: 'BozonRegular',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '18px',
          }}
        >
          {content.title.text}
        </Typography>
        {content.items.map((item) => (
          <Typography
            key={item.id}
            color={item.color}
            gutterBottom
            variant="h6"
            align="center"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              fontWeight: 'normal',
              lineHeight: '16px',
              marginTop: '15px',
            }}
          >
            {item.text}
          </Typography>
        ))}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <List
            sx={{border: '2px solid #708DC7', marginTop: '24px', width: !matches ? 'max-content' : '100%'}}
          >
            <ListItem sx={{justifyContent: 'center'}}>
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="center"
                sx={{
                  fontFamily: 'BozonRegular',
                  fontSize: '16px',
                  fontWeight: 'normal',
                  lineHeight: '18px',
                }}
              >
              6 unidades - $ 10.000
              </Typography>
            </ListItem>
            <Divider component="li" color="secondary"/>
            <ListItem sx={{justifyContent: 'center'}}>
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="center"
                sx={{
                  fontFamily: 'BozonRegular',
                  fontSize: '16px',
                  fontWeight: 'normal',
                  lineHeight: '18px',
                }}
              >
              12 unidades - $ 20.000
              </Typography>
            </ListItem>
          </List>
        </div>
        <div style={{marginTop: '40px'}}>
          <CustomButton
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20unos%20Macarons!"
            size="large"
            text="HAZ TU PEDIDO"
            fullWidth={matches}
          />
        </div>
      </Grid>
    </DetailView>
  );
};

Macarons.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Macarons;
