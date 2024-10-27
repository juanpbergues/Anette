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

import CustomButton from '../../components/CustomButton/CustomButton';
import DetailView from '../../components/DetailView/DetailView';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';

import ImageTop from '../../assets/annete-detail-banner-tartas-normal.jpg';
import ImageTopFull from '../../assets/annete-detail-banner-tartas-full.jpg';
import FirstImageDown
  from '../../assets/annete-detail-inferior-tartas-1.jpg';
import SecondImageDown
  from '../../assets/annete-detail-inferior-tartas-2.jpg';
import ThirdImageDown
  from '../../assets/annete-detail-inferior-tartas-3.jpg';

import './tartas-clasicas.scss';
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
      text: 'Pastelera - Frutos del Bosque',
      color: '#98C8BB',
      price: '$17.000',
    },
    {
      id: 2,
      text: 'Lemon Pie',
      color: '#98C8BB',
      price: '$15.000',
    },
    {
      id: 3,
      text: 'Chocolate',
      color: '#98C8BB',
      price: '$24.000',
    },
    {
      id: 4,
      text: 'Streusel Manzana',
      color: '#98C8BB',
      price: '$15.000',
    },
    {
      id: 5,
      text: 'Bretona',
      color: '#98C8BB',
      price: '$18.000',
    },
    {
      id: 6,
      text: 'Ricotta',
      color: '#98C8BB',
      price: '$17.000',
    },
  ],
};

const TartasClasicas = ({matches, fullScreen}) => {
  const defaultClassName = 'tartas-clasicas';
  return (
    <DetailView
      matches={matches}
      title="TARTAS CLASICAS"
      imageTop={fullScreen ? ImageTopFull : ImageTop}
      id="tartas-clasicas"
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
                fontFamily: 'BozonRegular',
                fontSize: '16px',
                fontWeight: 'normal',
                lineHeight: '16px',
                marginTop: '15px',
                width: 'fit-content',
              }}
            >
              {item.text}
            </Typography>
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
          </div>
        ))}
        <div style={{marginTop: '40px'}}>
          <CustomButton
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Tarta%20Clasica!"
            size="large"
            text="HAZ TU PEDIDO"
            fullWidth={matches}
          />
        </div>
      </Grid>
    </DetailView>
  );
};

TartasClasicas.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default TartasClasicas;
