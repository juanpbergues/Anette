/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Avatar,
} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/annete-tortas-detail-sup.jpg';
import ImageTopMobile from '../../assets/annete-tortas-detail-sup-mobile.jpg';
import FirstImageDown
  from '../../assets/annete-tortas-detail-first-inferior.jpg';
import FirstImageDownMobile
  from '../../assets/annete-tortas-detail-first-inferior-mobile.jpg';
import SecondImageDown
  from '../../assets/annete-tortas-detail-second-inferior.jpg';
import ThirdImageDown
  from '../../assets/annete-tortas-detail-third-inferior.jpg';
import FourthImageDown
  from '../../assets/annete-tortas-detail-fourth-inferior.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';

import './tortas.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


const content = {
  steps: [
    {
      id: 1,
      title: {
        text: 'Bizcocho',
        color: 'secondary',
      },
      color: '#98C8BB',
      items: [
        {
          id: 1,
          text: 'Vanilla',
          color: '#98C8BB',
        },
        {
          id: 2,
          text: 'Chocolate',
          color: '#98C8BB',
        },
        {
          id: 3,
          text: 'Amapola',
          color: '#98C8BB',
        },
        {
          id: 4,
          text: 'Sésamo',
          color: '#98C8BB',
        },
        {
          id: 5,
          text: 'Té verde',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Platano Nuez',
          color: '#98C8BB',
        },
        {
          id: 7,
          text: 'Almendras - Pistachos o Avellanas',
          color: '#98C8BB',
        },
        {
          id: 8,
          text: 'Calabaza',
          color: '#98C8BB',
        },
      ],
    },
    {
      id: 2,
      color: '#98C8BB',
      title: {
        text: 'Mousse o Cremoso',
        color: 'secondary',
      },
      items: [
        {
          id: 1,
          text: 'Chocolate negro, blanco o leche',
          color: '#98C8BB',
        },
        {
          id: 2,
          text: 'Pistacho',
          color: '#98C8BB',
        },
        {
          id: 3,
          text: 'Café',
          color: '#98C8BB',
        },
        {
          id: 4,
          text: 'Té verde',
          color: '#98C8BB',
        },
        {
          id: 5,
          text: 'Naranja',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Mango - Maracuyá',
          color: '#98C8BB',
        },
        {
          id: 7,
          text: 'Frambuesa',
          color: '#98C8BB',
        },
        {
          id: 8,
          text: 'Arándanos',
          color: '#98C8BB',
        },
      ],
    },
    {
      id: 3,
      color: '#98C8BB',
      title: {
        color: 'secondary',
        text: 'Compotas',
      },
      items: [
        {
          id: 1,
          text: 'Cassis',
          color: '#98C8BB',
        },
        {
          id: 2,
          text: 'Frambuesaa',
          color: '#98C8BB',
        },
        {
          id: 3,
          text: 'Frutilla',
          color: '#98C8BB',
        },
        {
          id: 4,
          text: 'Arándano',
          color: '#98C8BB',
        },
        {
          id: 5,
          text: 'Mora',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Cereza',
          color: '#98C8BB',
        },
        {
          id: 6,
          text: 'Mango - Maracuya',
          color: '#98C8BB',
        },
      ],
    },
  ],
};

const TravelCakes = ({matches}) => {
  return (
    <DetailView
      matches={matches}
      title="ARMA TU TORTA"
      imageTop={!matches ? ImageTop : ImageTopMobile}
      id="tortas"
    >
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
            <Avatar
              src={matches ? FirstImageDownMobile : FirstImageDown}
              variant="square"
              sx={!matches ? {
                width: '460px',
                height: '575px',
                border: 'solid #98C8BB',
              } : {
                width: '98%',
                height: '50vh',
                border: 'solid #98C8BB',
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            className="tortas-detail-view"
          >
            <Avatar
              src={SecondImageDown}
              variant="square"
              sx={!matches ? {
                width: '460px',
                height: '575px',
                border: 'solid #98C8BB',
              } : {
                width: '98%',
                height: '50vh',
                border: 'solid #98C8BB',
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            className="tortas-detail-view"
          >
            <Avatar
              src={ThirdImageDown}
              variant="square"
              sx={!matches ? {
                width: '460px',
                height: '575px',
                border: 'solid #98C8BB',
              } : {
                width: '98%',
                height: '50vh',
                border: 'solid #98C8BB',
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            className="tortas-detail-view"
          >
            <Avatar
              src={FourthImageDown}
              variant="square"
              sx={!matches ? {
                width: '460px',
                height: '575px',
                border: 'solid #98C8BB',
              } : {
                width: '98%',
                height: '50vh',
                border: 'solid #98C8BB',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={0}
        >
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            align="center"
            sx={{
              fontFamily: 'BozonBold',
              fontSize: '17px',
              fontWeight: 'bold',
              lineHeight: '18px',
              marginBottom: '8px',
              marginTop: '40px',
            }}
          >
                ¡Convertimos tus deseos en realidad personalizando tu torta!
          </Typography>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            align="r"
            sx={{
              fontFamily: 'BozonRegular',
              fontSize: '16px',
              lineHeight: '18px',
              marginBottom: '8px',
              marginTop: '8px',
              width: '95%',
            }}
          >
                Si ya tienes un diseño en mente, realiza tu pedido especificando cómo te gustaría que sea la decoración. Además, elige una opción de bizcocho y uno o dos rellenos de entre las opciones 2 y 3.
          </Typography>
          {content.steps.map((step) => (
            <Grid
              item
              xs={12}
              md={4}
              key={step.id}
              sx={
                step.id === 1 && matches ?
                  {marginBottom: '20px', marginTop: '20px'} :
                  {marginBottom: '20px', marginTop: '20px'}
              }
            >
              <Typography
                color={step.color}
                gutterBottom
                variant="h3"
                align="center"
                sx={{
                  fontFamily: 'BozonRegular',
                  fontSize: '52px',
                  fontWeight: 'normal',
                  lineHeight: '48px',
                }}
              >
                {step.id}
              </Typography>
              <Typography
                color={step.title.color}
                gutterBottom
                variant="h5"
                align="center"
                sx={{
                  fontFamily: 'BozonBold',
                  fontSize: '17px',
                  fontWeight: 'bold',
                  lineHeight: '18px',
                }}
              >
                {step.title.text}
              </Typography>
              {
                step.items.map((item) => (
                  <Typography
                    key={item.id}
                    color={item.color}
                    gutterBottom
                    variant="h6"
                    align="center"
                    sx={{
                      fontFamily: 'BozonRegular',
                      fontSize: '16px',
                      fontWeight: 'normal',
                      lineHeight: '18px',
                      marginTop: '15px',
                    }}
                  >
                    {item.text}
                  </Typography>
                ))
              }
            </Grid>
          ))}
          <CustomButton
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Torta!"
            size="large"
            text="HAZ TU PEDIDO"
            fullWidth={matches}
          />
        </Grid>
      </Grid>
    </DetailView >
  );
};

TravelCakes.propTypes = {
  matches: PropTypes.bool,
};

export default TravelCakes;
