import React from 'react';
import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay, EffectFade} from 'swiper';
import Page from '../../Page/Page';

import Image1 from '../../../assets/annete-hero-1.jpg';
import Image2 from '../../../assets/annete-hero-2.jpg';
import Image3 from '../../../assets/annete-hero-3.jpg';
import Image4 from '../../../assets/annete-hero-4.jpg';
import Image5 from '../../../assets/annete-hero-5.jpg';
import Image6 from '../../../assets/annete-hero-6.jpg';
import Image7 from '../../../assets/annete-hero-7.jpg';
import Image8 from '../../../assets/annete-hero-8.jpg';
import Image9 from '../../../assets/annete-hero-9.jpg';
import Image10 from '../../../assets/annete-hero-10.jpg';
import Image11 from '../../../assets/annete-hero-11.jpg';
import Image12 from '../../../assets/annete-hero-12.jpg';
import Image13 from '../../../assets/annete-hero-13.jpg';
import Image14 from '../../../assets/annete-hero-14.jpg';
import Image15 from '../../../assets/annete-hero-15.jpg';
import Image16 from '../../../assets/annete-hero-16.jpg';
import Image17 from '../../../assets/annete-hero-17.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const WebviewCarousel = ({matches}) => {
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
      style={{height: '90%'}}
    >
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image1} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image2} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image3} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image4} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image5} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image6} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image7} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image8} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image9} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image10} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image11} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image12} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image13} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image14} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image15} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image16} matches={matches} />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page image={Image17} matches={matches} />
      </SwiperSlide>
    </Swiper>
  );
};

WebviewCarousel.propTypes = {
  matches: PropTypes.bool,
};

export default WebviewCarousel;
