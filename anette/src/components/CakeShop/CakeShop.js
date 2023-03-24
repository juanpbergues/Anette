import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';
import './cake-shop.scss';
import Image3 from '../../assets/anette-carousel-3.jpg';
import CustomCard from '../Card/CustomCard';

const CakeShop = () => {
  const cards = [
    {
      id: 1,
      title: 'TORTAS',
      image: Image3,
    },
    {
      id: 2,
      title: 'TARTAS CLASICAS Y DE VITRINAS',
      image: Image3,
    },
    {
      id: 3,
      title: 'MACARONS',
      image: Image3,
    },
    {
      id: 4,
      title: 'COOKIES',
      image: Image3,
    },
    {
      id: 5,
      title: 'TRAVEL CAKES',
      image: Image3,
    },
    {
      id: 6,
      title: 'NOUGATS',
      image: Image3,
    },
  ];

  return (
    <div className="cake-shop-container">
      <Typography
        color="secondary"
        gutterBottom
        variant="h4"
        component="div"
        className="title"
      >
        PASTELERÍA PREMIUM NATURAL
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {cards.map((card) => (
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            className="card-container"
            spacing={3}
            key={card.id}
          >
            <CustomCard image={card.image} title={card.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CakeShop;
