/* eslint-disable max-len */
import React from 'react';

import PropTypes from 'prop-types';
import {
  Divider,
  Grid,
  List,
  ListItem,
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

// Desktop images
import ImageTop from '../../assets/annete-detail-banner-tortas-normal.jpg';
import ImageTopFull from '../../assets/annete-detail-banner-tortas-full.jpg';
import FirstImageDown
  from '../../assets/annete-detail-inferior-tortas-1.jpg';
import SecondImageDown
  from '../../assets/annete-detail-inferior-tortas-2.jpg';
import ThirdImageDown
  from '../../assets/annete-detail-inferior-tortas-3.jpg';
import FourthImageDown
  from '../../assets/annete-detail-inferior-tortas-4.jpg';

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
          text: <>Almendras - Pistachos o<br /> Avellanas</>,
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
          text: <>Chocolate negro, <br />blanco o leche</>,
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
          text: <>Mango -<br /> Maracuyá</>,
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
          text: <>Mango -<br /> Maracuya</>,
          color: '#98C8BB',
        },
      ],
    },
  ],
};

const Tortas = ({matches, fullScreen}) => {
  return (
    <DetailView
      matches={matches}
      title="ARMA TU TORTA"
      imageTop={fullScreen ? ImageTopFull : ImageTop}
      id="tortas"
      fullScreen={fullScreen}
      subtitle={!matches ? '¡Convertimos tus deseos en realidad personalizando tu torta!' : ''}
      description={!matches ? 'Si ya tienes un diseño en mente, realiza tu pedido especificando cómo te gustaría que sea la decoración. Además, elige una opción de bizcocho y uno o dos rellenos de entre las opciones 2 y 3.' : ''}
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
          </Swiper>
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        {matches ? (
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
                lineHeight: '24px',
                marginBottom: '8px',
                marginTop: '32px',
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
                lineHeight: '24px',
                marginBottom: '16px',
                marginTop: '8px',
                width: '100%',
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
                sx={{marginBottom: '20px', marginTop: '20px'}}
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
            <List sx={{border: '2px solid #708DC7', marginTop: '16px', width: '100%'}}>
              <ListItem sx={{justifyContent: 'center'}}>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  }}
                >
                      10-15 porciones desde $60.000
                </Typography>
              </ListItem>
              <Divider component="li" color="secondary"/>
              <ListItem sx={{justifyContent: 'center'}}>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  }}
                >
                      15-20 porciones desde $70.000
                </Typography>
              </ListItem>
              <Divider component="li" color='#708DC7'/>
              <ListItem sx={{justifyContent: 'center'}}>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  }}
                >
                      20-25 porciones desde $80.000
                </Typography>
              </ListItem>
              <Divider component="li" color='#708DC7'/>
              <ListItem sx={{justifyContent: 'center'}}>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  }}
                >
                      25-30 porciones desde $90.000
                </Typography>
              </ListItem>
            </List>
          </Grid>
        ) : (
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
                sx={{marginBottom: '20px', marginTop: '20px'}}
              >
                <Typography
                  color={step.color}
                  gutterBottom
                  variant="h3"
                  align="center"
                  sx={fullScreen ? {
                    fontFamily: 'BozonRegular',
                    fontSize: '52px',
                    fontWeight: 'normal',
                    lineHeight: '48px',
                  } : {
                    fontFamily: 'BozonRegular',
                    fontSize: '46px',
                    fontWeight: 'normal',
                    lineHeight: '42px',
                  }}
                >
                  {step.id}
                </Typography>
                <Typography
                  color={step.title.color}
                  gutterBottom
                  variant="h5"
                  align="center"
                  sx={fullScreen ? {
                    fontFamily: 'BozonBold',
                    fontSize: '17px',
                    fontWeight: 'bold',
                    lineHeight: '18px',
                  } : {
                    fontFamily: 'BozonBold',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    lineHeight: '16px',
                    marginBottom: step.id === 1 || step.id === 3 ? '32px' : '0',
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
                      sx={fullScreen ? {
                        fontFamily: 'BozonRegular',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        lineHeight: '18px',
                        marginTop: '15px',
                      } : {
                        fontFamily: 'BozonRegular',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        lineHeight: '16px',
                        marginTop: '15px',
                      }}
                    >
                      {item.text}
                    </Typography>
                  ))
                }
              </Grid>
            ))}
            <List sx={{border: '2px solid #708DC7', marginTop: '15px'}}>
              <ListItem>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={fullScreen ? {
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  } : {
                    fontFamily: 'BozonRegular',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    lineHeight: '16px',
                  }}
                >
                      10-15 porciones desde $60.000
                </Typography>
              </ListItem>
              <Divider component="li" color="secondary"/>
              <ListItem>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={fullScreen ? {
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  } : {
                    fontFamily: 'BozonRegular',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    lineHeight: '16px',
                  }}
                >
                      15-20 porciones desde $70.000
                </Typography>
              </ListItem>
              <Divider component="li" color='#708DC7'/>
              <ListItem>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={fullScreen ? {
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  } : {
                    fontFamily: 'BozonRegular',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    lineHeight: '16px',
                  }}
                >
                      20-25 porciones desde $80.000
                </Typography>
              </ListItem>
              <Divider component="li" color='#708DC7'/>
              <ListItem>
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                  sx={fullScreen ? {
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '18px',
                  } : {
                    fontFamily: 'BozonRegular',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    lineHeight: '16px',
                  }}
                >
                      25-30 porciones desde $90.000
                </Typography>
              </ListItem>
            </List>
          </Grid>
        )}
      </Grid>
      <CustomButton
        href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Torta!"
        size="large"
        text="HAZ TU PEDIDO"
        marginTop="40px"
        fullWidth={matches}
      />
    </DetailView >
  );
};

Tortas.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Tortas;
