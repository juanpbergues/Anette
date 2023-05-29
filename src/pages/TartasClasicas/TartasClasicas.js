import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import CustomButton from '../../components/CustomButton/CustomButton';
import ImageTop from '../../assets/anette-tarta-clasica-detail-sup.jpg';
import ImageDown from '../../assets/anette-tarta-clasica-detail-down.jpg';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: '· Pastelera - Frutos del Bosque',
      color: '#98C8BB',
    },
    {
      id: 2,
      text: '· Lemon Pie',
      color: '#98C8BB',
    },
    {
      id: 3,
      text: '· Cheesecake',
      color: '#98C8BB',
    },
    {
      id: 4,
      text: '· Streusel Manzana',
      color: '#98C8BB',
    },
    {
      id: 5,
      text: '· Chocolate',
      color: '#98C8BB',
    },
  ],
};

const TartasClasicas = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="TARTAS CLASICAS"
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
        <div style={{marginTop: '40px'}}>
          <CustomButton
            text="HACE TU PEDIDO"
            color="secondary"
            hoverColor="#98C8BB"
            size="large"
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Tarta%20Clasica!"
          />
        </div>
      </Grid>
    </DetailView>
  );
};

TartasClasicas.propTypes = {
  matches: PropTypes.bool,
};

export default TartasClasicas;
