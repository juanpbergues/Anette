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
import * as Routes from '../../constants/routes';

import 'swiper/css/autoplay';

const CakeShop = ({matches}) => {
  const cards = [
    {
      id: 'tortas',
      title: 'TORTAS',
      to: Routes.TORTAS,
    },
    {
      id: 'tartas',
      title: 'TARTAS CLASICAS',
      to: Routes.TARTAS_CLASICAS,
    },
    {
      id: 'macarons',
      title: 'MACARONS',
      to: Routes.MACARONS,
    },
    {
      id: 'cookies',
      title: 'COOKIES',
      to: Routes.COOKIES,
    },
    {
      id: 'travel-cakes',
      title: 'TRAVEL CAKES',
      to: Routes.TRAVEL_CAKES,
    },
    {
      id: 'tortas-vitrina',
      title: 'TORTAS MODERNAS',
      to: Routes.TORTAS_VITRINA,
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
          PASTELERÍA {matches && <br />}PREMIUM NATURAL
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {!matches ? (
            <>
              {cards.map((card) => (
                <Grid
                  item
                  lg={4}
                  md={4}
                  xs={12}
                  className="card-container"
                  spacing={0}
                  key={card.id}
                >
                  <CustomCard
                    id={card.id}
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
                loop={true}
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
                      id={card.id}
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
