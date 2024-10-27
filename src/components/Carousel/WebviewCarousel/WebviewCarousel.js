import React from 'react';
import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay, EffectFade} from 'swiper';
import Page from '../../Page/Page';

import FirstImage from '../../../assets/annete-banner-normal-1.jpg';
import SecondImage from '../../../assets/annete-banner-normal-2.jpg';
import ThirdImage from '../../../assets/annete-banner-normal-3.jpg';
import FourthImage from '../../../assets/annete-banner-normal-4.jpg';
import FifthImage from '../../../assets/annete-banner-normal-5.jpg';
import SixthImage from '../../../assets/annete-banner-normal-6.jpg';
import SeventhImage from '../../../assets/annete-banner-normal-7.jpg';
import EighthImage from '../../../assets/annete-banner-normal-8.jpg';
import NinthImage from '../../../assets/annete-banner-normal-9.jpg';

import FirstImageFull from '../../../assets/annete-banner-full-1.jpg';
import SecondImageFull from '../../../assets/annete-banner-full-2.jpg';
import ThirdImageFull from '../../../assets/annete-banner-full-3.jpg';
import FourthImageFull from '../../../assets/annete-banner-full-4.jpg';
import FifthImageFull from '../../../assets/annete-banner-full-5.jpg';
import SixthImageFull from '../../../assets/annete-banner-full-6.jpg';
import SeventhImageFull from '../../../assets/annete-banner-full-7.jpg';
import EighthImageFull from '../../../assets/annete-banner-full-8.jpg';
import NinthImageFull from '../../../assets/annete-banner-full-9.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const WebviewCarousel = ({fullScreen}) => {
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
        <Page
          image={fullScreen ? FirstImageFull : FirstImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? SecondImageFull : SecondImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? ThirdImageFull : ThirdImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? FourthImageFull : FourthImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? FifthImageFull : FifthImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? SixthImageFull : SixthImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? SeventhImageFull : SeventhImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? EighthImageFull : EighthImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
      <SwiperSlide style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Page
          image={fullScreen ? NinthImageFull : NinthImage}
          fullScreen={fullScreen}
        />
      </SwiperSlide>
    </Swiper>
  );
};

WebviewCarousel.propTypes = {
  fullScreen: PropTypes.bool,
};

export default WebviewCarousel;
