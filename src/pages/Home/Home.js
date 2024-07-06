import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import CakeShop from '../../components/CakeShop/CakeShop';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactWithQR from '../../components/ContactWithQR/ContactWithQR';

const Home = ({matches}) => {
  return (
    <>
      <Carousel matches={matches} />
      <CakeShop matches={matches} />
      <AboutMe matches={matches} />
      <ContactWithQR matches={matches} />
    </>
  );
};

Home.propTypes = {
  matches: PropTypes.string,
};

export default Home;
