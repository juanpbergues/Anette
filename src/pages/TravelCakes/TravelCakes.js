/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/annete-travel-cake-detail-1.jpg';
import ImageTopMobile from '../../assets/annete-travel-cake-detail-sup-mobile.jpg';
import ImageDown from '../../assets/annete-travel-cake-detail-2.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: 'Peras - Queso Azul - Ganache de chocolate blanco y nueces',
      color: '#98C8BB',
    },
    {
      id: 2,
      text: 'Limón - Cremoso de Frambuesa y Sablé',
      color: '#98C8BB',
    },
    {
      id: 3,
      text: 'Calabaza - Toffe y Chocolate blanco tostado',
      color: '#98C8BB',
    },
    {
      id: 4,
      text: 'Lima-Cremoso de yuzu y Arándanos',
      color: '#98C8BB',
    },
    {
      id: 5,
      text: 'Chocolate baño Rocher',
      color: '#98C8BB',
    },
  ],
};

const TravelCakes = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="TRAVEL CAKES"
      imageTop={matches ? ImageTopMobile : ImageTop}
      imageDown={ImageDown}
      show
    >
      <Grid item xs={12} md={6}>
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
          }:{
            fontFamily: 'BozonBold',
            fontSize: '18px',
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
              fontSize: '18px',
              fontWeight: 'normal',
              lineHeight: '18px',
              marginTop: '15px',
            }}
          >
            {item.text}
          </Typography>
        ))}
        <div style={{marginTop: '40px'}}>
          <CustomButton
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Travel%20Cake!"
            size="large"
            text="HAZ TU PEDIDO"
            fullWidth={matches}
          />
        </div>
      </Grid>
    </DetailView>
  );
};

TravelCakes.propTypes = {
  matches: PropTypes.bool,
};

export default TravelCakes;
