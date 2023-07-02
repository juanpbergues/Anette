import React from 'react';
import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import Page from '../Page/Page';
import './carousel.scss';
import Image1 from '../../assets/annete-hero-2.jpg';
import Image2 from '../../assets/annete-hero-2.jpg';
import Image3 from '../../assets/annete-hero-3.jpg';
import Image4 from '../../assets/annete-hero-4.jpg';
import Image5 from '../../assets/annete-hero-5.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Carousel = ({matches}) => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 3000}}
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
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  image: PropTypes.string,
  matches: PropTypes.bool,
};

export default Carousel;
