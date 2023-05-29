/* eslint max-len: ["error", { "ignoreStrings": true }] */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import CustomButton from '../../components/CustomButton/CustomButton';
import ImageTop from '../../assets/anette-macarons-card.jpg';
import ImageDown from '../../assets/anette-macarons-inferior.jpg';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      title: '· Té verde-Limón y Arándanos.',
      text: 'Sablé, frangipan de limón arándano y mouse de té verde y limón.',
      color: '#98C8BB',
    },
    {
      id: 2,
      title: '· Manzana verde-Yuzu y Canela.',
      text: 'Bizcocho limón, crujiente de nuez, compota de manzana y mouse de manzana verde, yuzu y jengibre.',
      color: '#98C8BB',
    },
    {
      id: 3,
      title: '· Terciopelo Maracuyá.',
      text: 'Bizcocho sésamo negro, namelaka de chocolate blanco, streusel de sésamo y mouse de maracuyá',
      color: '#98C8BB',
    },
    {
      id: 4,
      title: '· Corazón Chocolate-Cassis.',
      text: 'Bizcocho Earl Grey, Compota cassis y mouse de chocolate 56%.',
      color: '#98C8BB',
    },
    {
      id: 5,
      title: '· Pistacho-Frambuesa.',
      text: 'Genoise de pistacho, compota de frambuesa y mousse de pistacho',
      color: '#98C8BB',
    },
    {
      id: 6,
      title: '· Naranja-Café- Avellana.',
      text: 'Sablé, bizcocho de avellanas, compota de naranja y mousse de café.',
      color: '#98C8BB',
    },
    {
      id: 7,
      title: '· Domo Toffe Dulcey',
      text: 'Bizcocho de maní, crocante, toffe y mousse Dulcey',
      color: '#98C8BB',
    },
  ],
};

const TartasVitrina = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="TARTAS DE VITRINA"
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
          <div key={item.id}>
            <Typography
              color={item.color}
              align="left"
              sx={{marginTop: '15px'}}
            >
              <strong>{item.title}</strong>
            </Typography>
            <Typography
              color={item.color}
              gutterBottom
              align="left"
            >
              {item.text}
            </Typography>
          </div>
        ))}
        <div style={{marginTop: '40px'}}>
          <CustomButton
            text="HACE TU PEDIDO"
            color="secondary"
            hoverColor="#98C8BB"
            size="large"
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Tarta%20de%20Vitrina!"
          />
        </div>
      </Grid>
    </DetailView>
  );
};

TartasVitrina.propTypes = {
  matches: PropTypes.bool,
};

export default TartasVitrina;
