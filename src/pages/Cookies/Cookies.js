import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import CustomButton from '../../components/CustomButton/CustomButton';
import ImageTop from '../../assets/anette-detail-cookie-top.jpg';
import ImageDown from '../../assets/anette-detail-cookie-down.jpg';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: '· Amapola-Naranja o Limón',
      color: '#98C8BB',
    },
    {
      id: 2,
      text: '· Pistacho Centro Frambuesa',
      color: '#98C8BB',
    },
    {
      id: 3,
      text: '· Sésamo Centro Maracuyá',
      color: '#98C8BB',
    },
    {
      id: 4,
      text: '· Chips chocolate negro o blanco',
      color: '#98C8BB',
    },
    {
      id: 5,
      text: '· Coco-Chocolate Frambuesa',
      color: '#98C8BB',
    },
    {
      id: 6,
      text: '· Mani-Chocolate blanco Tostado',
      color: '#98C8BB',
    },
    {
      id: 7,
      text: '· Jengibre',
      color: '#98C8BB',
    },
    {
      id: 8,
      text: '· Avena Pasas',
      color: '#98C8BB',
    },
    {
      id: 9,
      text: '· Sablés bañadas',
      color: '#98C8BB',
    },
  ],
};

const Cookies = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      imageDown={ImageDown}
      imageTop={ImageTop}
      title="COOKIES"
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
        <div style={{marginTop: '40px'}}>
          <CustomButton
            text="HACE TU PEDIDO"
            color="secondary"
            hoverColor="#98C8BB"
            size="large"
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20unas%20Cookies!"
          />
        </div>
      </Grid>
    </DetailView>
  );
};

Cookies.propTypes = {
  matches: PropTypes.bool,
};

export default Cookies;
