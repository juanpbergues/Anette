/* eslint max-len: ["error", { "ignoreStrings": true }] */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
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

import ImageTop from '../../assets/annete-detail-banner-moderna-normal.jpg';
import ImageTopFull from '../../assets/annete-detail-banner-moderna-full.jpg';
import FirstImageDown
  from '../../assets/annete-detail-inferior-moderna-1.jpg';
import SecondImageDown
  from '../../assets/annete-detail-inferior-moderna-2.jpg';

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
      title: 'Té verde-Limón y Arándanos.',
      text: 'Sablé, frangipan de limón arándano y mouse de té verde y limón.',
      color: '#98C8BB',
      price: '$ 38.000',
    },
    {
      id: 2,
      title: 'Manzana verde-Yuzu y Canela.',
      text: 'Bizcocho limón, crujiente de nuez, compota de manzana y mouse de manzana verde, yuzu y jengibre.',
      color: '#98C8BB',
      price: '$ 38.000',
    },
    {
      id: 3,
      title: 'Terciopelo Maracuyá.',
      text: 'Bizcocho sésamo negro, namelaka de chocolate blanco, streusel de sésamo y mouse de maracuyá',
      color: '#98C8BB',
      price: '$ 37.000',
    },
    {
      id: 4,
      title: 'Corazón Chocolate-Cassis.',
      text: 'Bizcocho Earl Grey, Compota cassis y mouse de chocolate 56%.',
      color: '#98C8BB',
      price: '$ 33.000',
    },
    {
      id: 5,
      title: 'Pistacho-Frambuesa.',
      text: 'Genoise de pistacho, compota de frambuesa y mousse de pistacho',
      color: '#98C8BB',
      price: '$ 34.000',
    },
    {
      id: 6,
      title: 'Naranja-Café- Avellana.',
      text: 'Sablé, bizcocho de avellanas, compota de naranja y mousse de café.',
      color: '#98C8BB',
      price: '$ 27.000',
    },
    {
      id: 7,
      title: 'Domo Toffe Dulcey',
      text: 'Bizcocho de maní, crocante, toffe y mousse Dulcey',
      color: '#98C8BB',
      price: '$ 34.000',
    },
    {
      id: 8,
      title: 'Selva Negra',
      text: 'Bizcocho de cacao . Mousse de chocolate negro. Compota de cerezas, namelaka de chocolate blanco y kirch',
      color: '#98C8BB',
      price: '$ 34.000',
    },
  ],
};

const TartasVitrina = ({matches, fullScreen}) => {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id) => {
    setExpanded(id);
  };

  return (
    <DetailView
      matches={matches}
      title="TORTAS MODERNAS"
      imageTop={fullScreen ? ImageTopFull : ImageTop}
      id="tortas-modernas"
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
                      8 a 10 Porciones: {item.price}
                    </Typography>
                  </ListItem>
                </List>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <div style={{marginTop: '40px'}}>
        <CustomButton
          href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20una%20Tarta%20de%20Vitrina!"
          size="large"
          text="HAZ TU PEDIDO"
          fullWidth={matches}
        />
      </div>
    </DetailView>
  );
};

TartasVitrina.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default TartasVitrina;
