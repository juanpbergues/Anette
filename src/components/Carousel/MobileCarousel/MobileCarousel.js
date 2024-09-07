import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay, EffectFade} from 'swiper';

import FirstImage from '../../../assets/annete-banner-mobile-1.jpg';
import SecondImage from '../../../assets/annete-banner-mobile-2.jpg';
import ThirdImage from '../../../assets/annete-banner-mobile-3.jpg';
import FourthImage from '../../../assets/annete-banner-mobile-4.jpg';
import FifthImage from '../../../assets/annete-banner-mobile-5.jpg';
import SixthImage from '../../../assets/annete-banner-mobile-6.jpg';
import SeventhImage from '../../../assets/annete-banner-mobile-7.jpg';
import EighthImage from '../../../assets/annete-banner-mobile-8.jpg';
import NinthImage from '../../../assets/annete-banner-mobile-9.jpg';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const MobileCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      lazy={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{delay: 3000}}
      grabCursor={true}
      effect={'fade'}
    >
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={FirstImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={SecondImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={ThirdImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={FourthImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={FifthImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={SixthImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={SeventhImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={EighthImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={NinthImage} style={{
          'width': '100%',
          'aspectRatio': '3 / 4',
        }} />
      </SwiperSlide>
    </Swiper>
  );
};

MobileCarousel.propTypes = {};

export default MobileCarousel;
