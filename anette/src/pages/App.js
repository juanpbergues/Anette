import React from 'react';
import './app.scss';
import CustomAppBar from '../components/AppBar/AppBar';
import Carousel from '../components/Carousel/Carousel';
import CakeShop from '../components/CakeShop/CakeShop';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <CustomAppBar />
      <Carousel/>
      <CakeShop />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
