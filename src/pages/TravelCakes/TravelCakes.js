import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/anette-travel-detail-superior.jpg';
import ImageDown from '../../assets/anette-travel-detail-inferior.jpg';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: '· Peras - Queso Azul - Ganache de chocolate blanco y nueces',
      color: '#98C8BB',
    },
    {
      id: 2,
      text: '· Limón - Cremoso de Frambuesa y Sablé',
      color: '#98C8BB',
    },
    {
      id: 3,
      text: '· Calabaza - Toffe y Chocolate blanco tostado',
      color: '#98C8BB',
    },
    {
      id: 4,
      text: '· Lima-Cremoso de yuzu y Arándanos',
      color: '#98C8BB',
    },
    {
      id: 5,
      text: '· Chocolate baño Rocher',
      color: '#98C8BB',
    },
  ],
};

const TravelCakes = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="TRAVEL CAKES"
      imageTop={ImageTop}
      imageDown={ImageDown}
    >
      <Grid item xs={12} md={6}>
        <Typography
          gutterBottom
          variant="h5"
          align={matches ? 'center' : 'left'}
          color={content.title.color}
          className="secondary-title"
          sx={matches && {marginTop: '40px'}}
        >
          {content.title.text}
        </Typography>
        {content.items.map((item) => (
          <Typography
            key={item.id}
            color={item.color}
            gutterBottom
            variant="h6"
            align="left"
          >
            {item.text}
          </Typography>
        ))}
      </Grid>
    </DetailView>
  );
};

TravelCakes.propTypes = {
  matches: PropTypes.bool,
};

export default TravelCakes;
