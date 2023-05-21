import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';
import './cake-shop.scss';
import CustomCard from '../Card/CustomCard';
import CookiesImage from '../../assets/anette-cookies-card.jpg';
import TortasImage from '../../assets/anette-tortas-card.jpg';
import MacaronsImage from '../../assets/anette-macarons-card.jpg';
import TravelImage from '../../assets/anette-travel-card.jpg';
import TartasImage from '../../assets/anette-carousel-2.jpg';
import * as Routes from '../../constants/routes';

const CakeShop = () => {
  const cards = [
    {
      id: 1,
      title: 'TORTAS',
      image: TortasImage,
      to: Routes.TORTAS,
    },
    {
      id: 2,
      title: 'TARTAS CLASICAS',
      image: TartasImage,
      to: Routes.TARTAS_CLASICAS,
    },
    {
      id: 3,
      title: 'MACARONS',
      image: MacaronsImage,
      to: Routes.MACARONS,
    },
    {
      id: 4,
      title: 'COOKIES',
      image: CookiesImage,
      to: Routes.COOKIES,
    },
    {
      id: 5,
      title: 'TRAVEL CAKES',
      image: TravelImage,
      to: Routes.TRAVEL_CAKES,
    },
    {
      id: 6,
      title: 'TARTAS DE VITRINA',
      image: TartasImage,
      to: Routes.TARTAS_VITRINA,
    },
  ];

  return (
    <div className="cake-shop-container" id="patisserie">
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
            <CustomCard image={card.image} title={card.title} to={card.to} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CakeShop;
