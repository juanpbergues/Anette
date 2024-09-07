import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/annete-macarons-detail-sup.jpg';
import ImageDown from '../../assets/annete-macarons-detail-inferior.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';

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
    },
    {
      id: 2,
      text: 'Pistacho',
      color: '#98C8BB',
    },
    {
      id: 3,
      text: 'Avellana',
      color: '#98C8BB',
    },
    {
      id: 4,
      text: 'Caramelo',
      color: '#98C8BB',
    },
    {
      id: 5,
      text: 'Vanilla',
      color: '#98C8BB',
    },
    {
      id: 6,
      text: 'Café',
      color: '#98C8BB',
    },
    {
      id: 7,
      text: 'Frambuesa',
      color: '#98C8BB',
    },
    {
      id: 8,
      text: 'Arándano',
      color: '#98C8BB',
    },
    {
      id: 9,
      text: 'Cassis',
      color: '#98C8BB',
    },
    {
      id: 10,
      text: 'Maracuyá',
      color: '#98C8BB',
    },
  ],
};

const Macarons = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="MACARONS"
      imageTop={ImageTop}
      imageDown={ImageDown}
      show
      id="macarons"
    >
      <Grid item xs={12} md={6}>
        <Typography
          gutterBottom
          variant="h5"
          align='center'
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
              fontSize: '16px',
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
};

export default Macarons;
