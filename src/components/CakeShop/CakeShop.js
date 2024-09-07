import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
} from '@mui/material';

import './cake-shop.scss';
import CustomCard from '../Card/CustomCard';
import * as Routes from '../../constants/routes';

import 'swiper/css/autoplay';
import MobileCakeShop from './MobileCakeShop/MobileCakeShop';

const CakeShop = ({matches}) => {
  const defaultClassName = matches ? 'cake-shop-mobile' : 'cake-shop';

  const cards = [
    {
      id: 'tortas',
      title: 'TORTAS',
      to: Routes.TORTAS,
    },
    {
      id: 'tartas',
      title: 'TARTAS CLASICAS',
      to: Routes.TARTAS_CLASICAS,
    },
    {
      id: 'macarons',
      title: 'MACARONS',
      to: Routes.MACARONS,
    },
    {
      id: 'cookies',
      title: 'COOKIES',
      to: Routes.COOKIES,
    },
    {
      id: 'travel-cakes',
      title: 'TRAVEL CAKES',
      to: Routes.TRAVEL_CAKES,
    },
    {
      id: 'tortas-vitrina',
      title: 'TORTAS MODERNAS',
      to: Routes.TORTAS_VITRINA,
    },
  ];

  const getCardsStyles = (index) => {
    if (index === 0 || index === 3) {
      return 'start';
    }
    if (index === 1 || index === 4) {
      return 'center';
    }
    return 'end';
  };

  return (
    <div className={`${defaultClassName}-section`} id="patisserie">
      <div className={`${defaultClassName}-container`}>
        <Typography
          color="secondary"
          variant="h5"
          className="title"
        >
          PASTELERIA PREMIUM {matches && <br />}NATURAL
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={matches ? {
            height: '40vh',
          }:{
            height: '90vh',
          }}
        >
          {!matches ? (
            <>
              {cards.map((card, index) => (
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                  className={`card-container-${getCardsStyles(index)}`}
                  spacing={0}
                  key={card.id}
                >
                  <CustomCard
                    id={card.id}
                    title={card.title}
                    to={card.to}
                  />
                </Grid>
              ))}
            </>
          ) : (
            <MobileCakeShop cards={cards} matches={matches} />
          )}
        </Grid>
      </div>
    </div>
  );
};

CakeShop.propTypes = {
  matches: PropTypes.bool,
};

export default CakeShop;
