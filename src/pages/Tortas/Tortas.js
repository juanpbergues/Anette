import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Avatar,
  Button,
} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay, EffectCreative} from 'swiper';
import DetailView from '../../components/DetailView/DetailView';
import ImageTop from '../../assets/anette-tortas-detail-top.jpg';
import FirstImageDown
  from '../../assets/annete-tortas-detail-first-inferior.jpg';
import SecondImageDown
  from '../../assets/annete-tortas-detail-second-inferior.jpg';
import ThirdImageDown
  from '../../assets/annete-tortas-detail-third-inferior.jpg';

import './tortas.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';

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
      imageTop={ImageTop}
      id="tortas"
    >
      <Grid item xs={12} md={6}>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectCreative]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{clickable: true}}
          autoplay={{delay: 3000}}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, 0],
            },
            next: {
              translate: [0, 0, 0],
            },
          }}
        >
          <SwiperSlide
            className="tortas-detail-view"
          >
            <Avatar
              src={FirstImageDown}
              variant="square"
              sx={{
                width: '460px',
                height: '575px',
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
              sx={{
                width: '460px',
                height: '575px',
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
              sx={{
                width: '460px',
                height: '575px',
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
          {content.steps.map((step) => (
            <Grid
              item
              xs={12}
              md={4}
              key={step.id}
              sx={
                step.id === 1 && matches ?
                  {marginBottom: '20px', marginTop: '20px'} :
                  {marginBottom: '20px'}
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
          <Button
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Torta!"
            variant="contained"
            sx={{
              'marginTop': '10px',
              'borderRadius': '0px',
              'color': 'white',
              'backgroundColor': '#98C8BB',
              'boxShadow': 'none',
              '&:hover': {
                backgroundColor: '#77b6a5',
                boxShadow: 'none',
              },
            }}
            size="medium"
          >
            HACE TU PEDIDO
          </Button>
        </Grid>
      </Grid>
    </DetailView >
  );
};

TravelCakes.propTypes = {
  matches: PropTypes.bool,
};

export default TravelCakes;
