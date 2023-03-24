import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import Page from './Page/Page';
import './carousel.scss';
import Image1 from '../../assets/anette-carousel-1.jpg';
import Image2 from '../../assets/anette-carousel-2.jpg';
import Image3 from '../../assets/anette-carousel-3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Carousel = () => {
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
          <Page image={Image1} />
        </SwiperSlide>
        <SwiperSlide style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Page image={Image2} />
        </SwiperSlide>
        <SwiperSlide style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Page image={Image3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
