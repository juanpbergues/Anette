import React, {useState} from 'react';
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
  const defaultClassName = matches ? 'cake-shop-mobile' : 'cake-shop';

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

  const [reverse, setReverse] = useState(false);

  return (
    <div className={`${defaultClassName}-section`} id="patisserie">
      <div className={`${defaultClassName}-container`}>
        <Typography
          color="secondary"
          gutterBottom
          variant="h5"
          className="title"
        >
          PASTELERIA PREMIUM {matches && <br />}NATURAL
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
                  md={6}
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
                autoplay={{
                  'delay': 3000,
                  'disableOnInteraction': false,
                  'pauseOnMouseEnter': false,
                  'stopOnLastSlide': false,
                  'waitForTransition': true,
                  'reverseDirection': reverse,
                }}
                cardsEffect={{
                  perSlideOffset: 8,
                  perSlideRotate: 2,
                  rotate: true,
                  slideShadows: false,
                }}
                onReachEnd={()=> setReverse(true)}
                onActiveIndexChange={(swiper)=>{
                  if (swiper.activeIndex === 0 && reverse) {
                    setReverse(false);
                  }
                }}
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
