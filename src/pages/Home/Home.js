import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import CakeShop from '../../components/CakeShop/CakeShop';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactWithQR from '../../components/ContactWithQR/ContactWithQR';
import {useNavigationStore} from '../../stores/useNavigationStore';

const Home = ({matches}) => {
  const primary = useNavigationStore((state) => state.primary);
  useEffect(() => {
    if (primary) {
      const element = document.getElementById(primary);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, []);

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
