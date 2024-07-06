import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Button,
} from '@mui/material';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/annete-tartas-clasicas-detail-view-sup.jpg';
import ImageDown from '../../assets/annete-tartas-clasicas-card-1.jpg';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: 'Pastelera - Frutos del Bosque',
      color: '#98C8BB',
    },
    {
      id: 2,
      text: 'Lemon Pie',
      color: '#98C8BB',
    },
    {
      id: 3,
      text: 'Cheesecake',
      color: '#98C8BB',
    },
    {
      id: 4,
      text: 'Streusel Manzana',
      color: '#98C8BB',
    },
    {
      id: 5,
      text: 'Chocolate',
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
      show
    >
      <Grid item xs={12} md={6}>
        <Typography
          gutterBottom
          variant="h5"
          align={'center'}
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
          <Button
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Tarta!"
            variant="contained"
            sx={{
              'marginTop': '10px',
              'borderRadius': '0px',
              'color': 'white',
              'backgroundColor': '#98C8BB',
              'boxShadow': 'none',
              '&:hover': {
                backgroundColor: '#77b6a5',
                boxShadow: 'none',
              },
            }}
            size="medium"
          >
            HACE TU PEDIDO
          </Button>
        </div>
      </Grid>
    </DetailView>
  );
};

TartasClasicas.propTypes = {
  matches: PropTypes.bool,
};

export default TartasClasicas;
