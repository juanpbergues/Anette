/* eslint-disable max-len */
import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';

// Mobiles images
import FirstImageDownMobile
  from '../../../assets/annete-detail-inferior-macarons-mobile-1.jpg';
import SecondImageDownMobile
  from '../../../assets/annete-detail-inferior-macarons-mobile-2.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const CarouselMacarons = () => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Autoplay,
        EffectFade,
      ]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{delay: 3000}}
      grabCursor={true}
      effect={'fade'}
    >
      <SwiperSlide
        className="tortas-detail-view"
      >
        <img src={FirstImageDownMobile} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide
        className="tortas-detail-view"
      >
        <img src={SecondImageDownMobile} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />

      </SwiperSlide>
    </Swiper>
  );
};

CarouselMacarons.propTypes = {};

export default CarouselMacarons;
