import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {useMediaQuery, Typography, Grid, Link} from '@mui/material';
import './app.scss';
import Home from './Home/Home';
import TravelCakes from './TravelCakes/TravelCakes';
import Macarons from './Macarons/Macarons';
import Tortas from './Tortas/Tortas';
import TartasClasicas from './TartasClasicas/TartasClasicas';
import TartasVitrina from './TartasVitrina/TartasVitrina';
import Cookies from './Cookies/Cookies';
import CustomAppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import * as Routes from '../constants/routes';


const App = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const router = createBrowserRouter([
    {
      path: Routes.HOME,
      element: <Home matches={matches} />,
    },
    {
      path: Routes.MACARONS,
      element: <Macarons matches={matches} />,
    },
    {
      path: Routes.COOKIES,
      element: <Cookies matches={matches} />,
    },
    {
      path: Routes.TARTAS_CLASICAS,
      element: <TartasClasicas matches={matches} />,
    },
    {
      path: Routes.TARTAS_VITRINA,
      element: <TartasVitrina matches={matches} />,
    },
    {
      path: Routes.TRAVEL_CAKES,
      element: <TravelCakes matches={matches} />,
    },
    {
      path: Routes.TORTAS,
      element: <Tortas matches={matches} />,
    },
  ]);
  return (
    <div className="app">
      <CustomAppBar matches={matches} />
      <RouterProvider router={router} />
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
    </div>
  );
};

export default App;
