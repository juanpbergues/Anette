/* eslint-disable max-len */
import React from 'react';

import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';

import DetailView from '../../components/DetailView/DetailView';
import CustomButton from '../../components/CustomButton/CustomButton';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';

import ImageTop from '../../assets/annete-detail-banner-cookies-normal.jpg';
import ImageTopFull from '../../assets/annete-detail-banner-cookies-full.jpg';
import FirstImageDown
  from '../../assets/annete-detail-inferior-cookies-1.jpg';
import SecondImageDown
  from '../../assets/annete-detail-inferior-cookies-2.jpg';
import ThirdImageDown
  from '../../assets/annete-detail-inferior-cookies-3.jpg';
import FourthImageDown
  from '../../assets/annete-detail-inferior-cookies-4.jpg';
import FifthImageDown
  from '../../assets/annete-detail-inferior-cookies-5.jpg';
import SixthImageDown
  from '../../assets/annete-detail-inferior-cookies-6.jpg';

import './cookies.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const content = {
  title: {
    color: 'secondary',
    text: 'Nuestros sabores',
  },
  items: [
    {
      id: 1,
      text: 'Amapola Naranja o Limón',
      color: '#98C8BB',
      price: '$13.500 x 6u',
    },
    {
      id: 2,
      text: 'Pistacho Centro Frambuesa',
      color: '#98C8BB',
      price: '$11.000 x 6u',
    },
    {
      id: 3,
      text: 'Almendra centro maracuya',
      color: '#98C8BB',
      price: '$11.000 x 6u',
    },
    {
      id: 4,
      text: 'Chips chocolate negro o blanco',
      color: '#98C8BB',
      price: '$8.250 x 6u',
    },
    {
      id: 5,
      text: 'Chocolate Avellanas',
      color: '#98C8BB',
      price: '$8.250 x 6u',
    },
    {
      id: 6,
      text: 'Mani Chocolate',
      color: '#98C8BB',
      price: '$8.000 x 6u',
    },
    {
      id: 7,
      text: 'Jengibre',
      color: '#98C8BB',
      price: '$6.000 x 6u',
    },
    {
      id: 8,
      text: 'Avena Pasas',
      color: '#98C8BB',
      price: '$8.000 x 6u',
    },
    {
      id: 9,
      text: 'Sablés bañadas',
      color: '#98C8BB',
      title: true,
      price: '$6.000 x 6u',
    },
    {
      id: 10,
      text: 'Chocolate Nibs',
      color: '#98C8BB',
    },
    {
      id: 11,
      text: 'Almendra Chocolate con leche',
      color: '#98C8BB',
    },
    {
      id: 12,
      text: 'Avellanas Chocolate blanco',
      color: '#98C8BB',
    },
    {
      id: 13,
      text: 'Sablés rellenas',
      color: '#98C8BB',
      title: true,
      price: '$10.500 x 6u',
    },
    {
      id: 14,
      text: 'Almendra-Cedron',
      color: '#98C8BB',
    },
    {
      id: 15,
      text: 'Chocolate-avellanas',
      color: '#98C8BB',
    },
    {
      id: 16,
      text: 'Pistacho-Frambuesa',
      color: '#98C8BB',
    },
    {
      id: 17,
      text: 'Nuez-Chocolate Bariloche',
      color: '#98C8BB',
    },
  ],
};

const Cookies = ({matches, fullScreen}) => {
  const defaultClassName = 'cookies';
  return (
    <DetailView
      matches={matches}
      imageTop={fullScreen ? ImageTopFull : ImageTop}
      title="COOKIES"
      id="cookies"
      fullScreen={fullScreen}
    >
      {!matches && (
        <Grid item xs={12} md={6}>
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
            lazy={true}
          >
            <SwiperSlide
              className="tortas-detail-view"
            >
              <img
                src={FirstImageDown}
                style={fullScreen ? {
                  width: '460px',
                  height: '100%',
                  border: 'solid #98C8BB',
                  aspectRatio: '3 / 4',
                } : {
                  width: '380px',
                  height: '100%',
                  aspectRatio: '3 / 4',
                  border: 'solid #98C8BB',
                }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="tortas-detail-view"
            >
              <img
                src={SecondImageDown}
                style={fullScreen ? {
                  width: '460px',
                  height: '100%',
                  border: 'solid #98C8BB',
                  aspectRatio: '3 / 4',
                } : {
                  width: '380px',
                  height: '100%',
                  aspectRatio: '3 / 4',
                  border: 'solid #98C8BB',
                }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="tortas-detail-view"
            >
              <img
                src={ThirdImageDown}
                style={fullScreen ? {
                  width: '460px',
                  height: '100%',
                  border: 'solid #98C8BB',
                  aspectRatio: '3 / 4',
                } : {
                  width: '380px',
                  height: '100%',
                  aspectRatio: '3 / 4',
                  border: 'solid #98C8BB',
                }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="tortas-detail-view"
            >
              <img
                src={FourthImageDown}
                style={fullScreen ? {
                  width: '460px',
                  height: '100%',
                  border: 'solid #98C8BB',
                  aspectRatio: '3 / 4',
                } : {
                  width: '380px',
                  height: '100%',
                  aspectRatio: '3 / 4',
                  border: 'solid #98C8BB',
                }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="tortas-detail-view"
            >
              <img
                src={FifthImageDown}
                style={fullScreen ? {
                  width: '460px',
                  height: '100%',
                  border: 'solid #98C8BB',
                  aspectRatio: '3 / 4',
                } : {
                  width: '380px',
                  height: '100%',
                  aspectRatio: '3 / 4',
                  border: 'solid #98C8BB',
                }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="tortas-detail-view"
            >
              <img
                src={SixthImageDown}
                style={fullScreen ? {
                  width: '460px',
                  height: '100%',
                  border: 'solid #98C8BB',
                  aspectRatio: '3 / 4',
                } : {
                  width: '380px',
                  height: '100%',
                  aspectRatio: '3 / 4',
                  border: 'solid #98C8BB',
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      )}
      <Grid item xs={12} md={6} sx={!matches && {paddingLeft: '16px'}}>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          color={content.title.color}
          className="secondary-title"
          sx={matches ? {
            fontFamily: 'BozonBold',
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: '18px',
            marginTop: '40px',
          } : {
            fontFamily: 'BozonRegular',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '18px',
          }}
        >
          {content.title.text}
        </Typography>
        {content.items.map((item) => (
          <div key={item.id} className={`${defaultClassName}-container`}>
            <Typography
              color={item.color}
              gutterBottom
              variant="h6"
              align="center"
              sx={{
                fontFamily: item.title ? 'BozonBold' : 'BozonRegular',
                fontSize: '16px',
                fontWeight: 'normal',
                lineHeight: '16px',
                marginTop: item.title ? '15px' : '15px',
                width: 'fit-content',
              }}
            >
              {item.text}
            </Typography>
            {item.price && (
              <>
                <HorizontalLine />
                <Typography
                  color={item.color}
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '16px',
                    marginTop: '15px',
                    width: 'fit-content',
                  }}
                >
                  {item.price}
                </Typography>
              </>
            )}
          </div>
        ))}
      </Grid>
      <div className={`${defaultClassName}__button`}>
        <CustomButton
          href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20unas%20Cookies!"
          size="large"
          text="HAZ TU PEDIDO"
          fullWidth={matches}
        />
      </div>
    </DetailView>
  );
};

Cookies.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Cookies;
