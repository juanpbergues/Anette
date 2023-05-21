import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import CakeShop from '../../components/CakeShop/CakeShop';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = ({matches}) => {
  return (
    <>
      <Carousel />
      <CakeShop />
      <AboutMe matches={matches} />
      <ContactUs />
    </>
  );
};

Home.propTypes = {
  matches: PropTypes.string,
};

export default Home;
