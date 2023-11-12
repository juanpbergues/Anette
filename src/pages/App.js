import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useMediaQuery, Typography, Grid, Link} from '@mui/material';
import './app.scss';
import Home from './Home/Home';
import TravelCakes from './TravelCakes/TravelCakes';
import Macarons from './Macarons/Macarons';
import Tortas from './Tortas/Tortas';
import TartasClasicas from './TartasClasicas/TartasClasicas';
import TartasVitrina from './TartasVitrina/TartasVitrina';
import Cookies from './Cookies/Cookies';
// import BuildUp from './BuildUp/BuildUp';
import CustomAppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import * as RoutesNames from '../constants/routes';


const App = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <div className="app">
      <CustomAppBar matches={matches} />
      <Routes>
        <Route
          path={RoutesNames.HOME}
          element={<Home
            matches={matches} />}
        />
        <Route
          path={RoutesNames.MACARONS}
          element={<Macarons matches={matches} />}
        />
        <Route
          path={RoutesNames.COOKIES}
          element={<Cookies matches={matches} />}
        />
        <Route
          path={RoutesNames.TARTAS_CLASICAS}
          element={<TartasClasicas matches={matches} />}
        />
        <Route
          path={RoutesNames.TARTAS_VITRINA}
          element={<TartasVitrina matches={matches} />}
        />
        <Route
          path={RoutesNames.TRAVEL_CAKES}
          element={<TravelCakes matches={matches} />}
        />
        <Route
          path={RoutesNames.TORTAS}
          element={<Tortas matches={matches} />}
        />
      </Routes>
      <Footer matches={matches} />
      <Grid
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
      </Grid>
    </div >
  );
};

export default App;
