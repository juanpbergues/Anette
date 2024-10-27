import React from 'react';

import {Routes, Route} from 'react-router-dom';
import {
  useMediaQuery,
  // Typography,
  // Grid,
  // Link
} from '@mui/material';

import Home from './Home/Home';
import TravelCakes from './TravelCakes/TravelCakes';
import Macarons from './Macarons/Macarons';
import Tortas from './Tortas/Tortas';
import TartasClasicas from './TartasClasicas/TartasClasicas';
import TartasVitrina from './TartasVitrina/TartasVitrina';
import Cookies from './Cookies/Cookies';
import CustomAppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
// import BuildUp from './BuildUp/BuildUp';

import * as RoutesNames from '../constants/routes';

import './app.scss';


const App = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const fullScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  return (
    <div className="app">
      <CustomAppBar matches={matches} fullScreen={fullScreen} />
      <Routes>
        <Route
          path={RoutesNames.HOME}
          element={
            <Home
              matches={matches}
              fullScreen={fullScreen}
            />
          }
        />
        <Route
          path={RoutesNames.MACARONS}
          element={<Macarons matches={matches} fullScreen={fullScreen} />}
        />
        <Route
          path={RoutesNames.COOKIES}
          element={<Cookies matches={matches} fullScreen={fullScreen} />}
        />
        <Route
          path={RoutesNames.TARTAS_CLASICAS}
          element={<TartasClasicas matches={matches} fullScreen={fullScreen} />}
        />
        <Route
          path={RoutesNames.TORTAS_VITRINA}
          element={<TartasVitrina matches={matches} fullScreen={fullScreen} />}
        />
        <Route
          path={RoutesNames.TRAVEL_CAKES}
          element={<TravelCakes matches={matches} fullScreen={fullScreen} />}
        />
        <Route
          path={RoutesNames.TORTAS}
          element={<Tortas matches={matches} fullScreen={fullScreen} />}
        />
        <Route
          path={RoutesNames.TERMS_AND_CONDITIONS}
          element={
            <TermsAndConditions
              matches={matches}
              fullScreen={fullScreen}
            />
          }
        />
      </Routes>
      <Footer matches={matches} fullScreen={fullScreen} />
      {/* <Grid
        style={{
          backgroundColor: '#4B4B4B',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Typography color="#FAFAFA" variant="subtitle2">
          Pagina web desarrollada por <Link color="#FAFAFA" href="https://www.linkedin.com/in/juanbergues/" underline="hover" variant="subtitle2">
            Juan Bergues
          </Link> 👨‍💻
        </Typography>
      </Grid> */}
    </div >
  );
};

export default App;
