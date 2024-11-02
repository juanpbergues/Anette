import React, {useState} from 'react';


import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Autoplay} from 'swiper';
import {Grid} from '@mui/material';

import CustomCard from '../../Card/CustomCard';

import '../cake-shop.scss';
import 'swiper/css/autoplay';

const MobileCakeShop = ({cards, matches}) => {
  const [reverse, setReverse] = useState(false);
  return (
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
              matches={matches}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

MobileCakeShop.propTypes = {
  cards: PropTypes.array,
  matches: PropTypes.bool,
};

export default MobileCakeShop;
