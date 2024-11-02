/* eslint-disable max-len */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';

import CustomButton from '../../components/CustomButton/CustomButton';
import DetailView from '../../components/DetailView/DetailView';

import ImageTop from '../../assets/annete-detail-banner-travel-cakes-normal.jpg';
import ImageTopFull from '../../assets/annete-detail-banner-travel-cakes-full.jpg';
import FirstImageDown
  from '../../assets/annete-detail-inferior-travel-cakes-1.jpg';
import SecondImageDown
  from '../../assets/annete-detail-inferior-travel-cakes-2.jpg';
import ThirdImageDown
  from '../../assets/annete-detail-inferior-travel-cakes-3.jpg';

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
      title: 'Peras',
      id: 1,
      text: 'Peras - Queso Azul - Ganache de chocolate blanco y nueces',
      color: '#98C8BB',
      first_price: '8 a 10 Porciones: $14.000',
      second_price: '15 Porciones: $21.000 ',
    },
    {
      title: 'Limon-Frambuesa',
      id: 2,
      text: 'Limón - Cremoso de Frambuesa y Sablé',
      first_price: '8 a 10 Porciones: $19.000',
      second_price: '15 Porciones: $29.000 ',
      color: '#98C8BB',
    },
    {
      title: 'Calabaza',
      id: 3,
      text: 'Calabaza - Toffe y Chocolate blanco tostado',
      first_price: '8 a 10 Porciones: $18.000',
      second_price: '15 Porciones: $28.000 ',
      color: '#98C8BB',
    },
    {
      title: 'Lima Yuzu-Arandanos',
      id: 4,
      text: 'Lima-Cremoso de yuzu y Arándanos',
      first_price: '8 a 10 Porciones: $18.000',
      second_price: '15 Porciones: $28.000 ',
      color: '#98C8BB',
    },
    {
      title: 'Chocolate Rocher',
      id: 5,
      text: 'Chocolate con baño Rocher',
      first_price: '8 a 10 Porciones: $18.000',
      second_price: '15 Porciones: $28.000 ',
      color: '#98C8BB',
    },
  ],
};

const TravelCakes = ({matches, fullScreen}) => {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id) => {
    setExpanded(id);
  };

  return (
    <DetailView
      matches={matches}
      title="TRAVEL CAKES"
      imageTop={fullScreen ? ImageTopFull : ImageTop}
      fullScreen={fullScreen}
      id="travel-cakes"
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
          }:{
            fontFamily: 'BozonBold',
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: '18px',
          }}
        >
          {content.title.text}
        </Typography>
        {content.items.map((item) => (
          <Accordion key={item.id} square disableGutters sx={{
            border: 'none',
            boxShadow: 'none',
            borderTop: expanded === item.id && item.id !== 1 && '1px solid rgba(0, 0, 0, 0.12)',
          }}
          expanded={expanded === item.id}
          onChange={() => handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary"/>}
            >
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
                  width: 'fit-content',
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                color={item.color}
                gutterBottom
                variant="h6"
                align="left"
                sx={{
                  fontFamily: 'BozonRegular',
                  fontSize: '16px',
                  fontWeight: 'normal',
                  lineHeight: '16px',
                  width: 'fit-content',
                }}
              >
                {item.text}
              </Typography>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                <List
                  sx={{border: '2px solid #708DC7', marginTop: '24px', width: !matches ? 'max-content' : '100%'}}
                >
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
                      {item.first_price}
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
                      {item.second_price}
                    </Typography>
                  </ListItem>
                </List>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
        <div style={{marginTop: '40px'}}>
          <CustomButton
            href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Travel%20Cake!"
            size="large"
            text="HAZ TU PEDIDO"
            fullWidth={matches}
          />
        </div>
      </Grid>
    </DetailView>
  );
};

TravelCakes.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default TravelCakes;
