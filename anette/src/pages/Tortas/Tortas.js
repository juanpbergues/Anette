import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/anette-tortas-detail-top.jpg';
import ImageDown from '../../assets/anette-tortas-detail-down.jpg';

const content = {
  steps: [
    {
      id: 1,
      title: {
        text: 'Bizcocho',
        color: 'secondary',
      },
      color: '#98C8BB',
      items: [
        {
          id: 1,
          text: 'Vanilla',
          color: '#98C8BB',
        },
        {
          id: 2,
          text: 'Chocolate',
          color: '#98C8BB',
        },
        {
          id: 3,
          text: 'Amapola',
          color: '#98C8BB',
        },
        {
          id: 4,
          text: 'Sésamo',
          color: '#98C8BB',
        },
        {
          id: 5,
          text: 'Té verde',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Platano Nuez',
          color: '#98C8BB',
        },
        {
          id: 7,
          text: 'Almendras - Pistachos o Avellanas',
          color: '#98C8BB',
        },
        {
          id: 8,
          text: 'Calabaza',
          color: '#98C8BB',
        },
      ],
    },
    {
      id: 2,
      color: '#98C8BB',
      title: {
        text: 'Mousse o Cremoso',
        color: 'secondary',
      },
      items: [
        {
          id: 1,
          text: 'Chocolate negro, blanco o leche',
          color: '#98C8BB',
        },
        {
          id: 2,
          text: 'Pistacho',
          color: '#98C8BB',
        },
        {
          id: 3,
          text: 'Café',
          color: '#98C8BB',
        },
        {
          id: 4,
          text: 'Té verde',
          color: '#98C8BB',
        },
        {
          id: 5,
          text: 'Naranja',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Mango - Maracuyá',
          color: '#98C8BB',
        },
        {
          id: 7,
          text: 'Frambuesa',
          color: '#98C8BB',
        },
        {
          id: 8,
          text: 'Arándanos',
          color: '#98C8BB',
        },
      ],
    },
    {
      id: 3,
      color: '#98C8BB',
      title: {
        color: 'secondary',
        text: 'Compotas',
      },
      items: [
        {
          id: 1,
          text: 'Cassis',
          color: '#98C8BB',
        },
        {
          id: 2,
          text: 'Frambuesaa',
          color: '#98C8BB',
        },
        {
          id: 3,
          text: 'Frutilla',
          color: '#98C8BB',
        },
        {
          id: 4,
          text: 'Arándano',
          color: '#98C8BB',
        },
        {
          id: 5,
          text: 'Mora',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Cereza',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Mango - Maracuya',
          color: '#98C8BB',
        },
      ],
    },
  ],
};

const TravelCakes = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="ARMA TU TORTA"
      imageTop={ImageTop}
      imageDown={ImageDown}
    >
      <Grid item xs={12} md={6}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          {content.steps.map((step) => (
            <Grid item xs={12} md={4} key={step.id} sx={{marginBottom: '20px'}}>
              <Typography
                color={step.color}
                gutterBottom
                variant="h3"
                align="center"
              >
                {step.id}
              </Typography>
              <Typography
                color={step.title.color}
                gutterBottom
                variant="h5"
                align="center"
                sx={step.id !== 2 && {marginBottom: '40px'}}
              >
                {step.title.text}
              </Typography>
              {
                step.items.map((item) => (
                  <Typography
                    key={item.id}
                    color={item.color}
                    gutterBottom
                    variant="h6"
                    align="center"
                    sx={{marginBottom: '15px'}}
                  >
                    {item.text}
                  </Typography>
                ))
              }
            </Grid>
          ))}
        </Grid>
      </Grid>
    </DetailView >
  );
};

TravelCakes.propTypes = {
  matches: PropTypes.bool,
};

export default TravelCakes;
