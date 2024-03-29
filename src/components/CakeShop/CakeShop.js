import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Autoplay} from 'swiper';
import './cake-shop.scss';
import CustomCard from '../Card/CustomCard';
import CookiesImage from '../../assets/anette-cookies-card.jpg';
import TortasImage from '../../assets/anette-tortas-card.jpg';
import MacaronsImage from '../../assets/anette-macarons-card.jpg';
import TravelImage from '../../assets/anette-travel-card.jpg';
import TartasImage from '../../assets/anette-carousel-2.jpg';
import * as Routes from '../../constants/routes';

import 'swiper/css/autoplay';

const CakeShop = ({matches}) => {
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
    <div className="cake-shop-section" id="patisserie">
      <div className="cake-shop-container">
        <Typography
          color="secondary"
          gutterBottom
          variant="h5"
          className="title"
        >
          PASTELERÍA {matches && <br/>}PREMIUM NATURAL
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {!matches ? (
            <>
              {cards.map((card) => (
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                  className="card-container"
                  spacing={0}
                  key={card.id}
                >
                  <CustomCard
                    image={card.image}
                    title={card.title}
                    to={card.to}
                  />
                </Grid>
              ))}
            </>
          ) : (
            <Grid
              item
              xs={12}
              className="card-container"
              spacing={0}
            >
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{delay: 3000}}
              >
                {cards.map((card) => (
                  <SwiperSlide style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  key={card.id}
                  >
                    <CustomCard
                      image={card.image}
                      title={card.title}
                      to={card.to}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};

CakeShop.propTypes = {
  matches: PropTypes.string,
};

export default CakeShop;
