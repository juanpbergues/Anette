import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,

} from '@mui/material';
import BackgroundImage from '../../assets/annete-build-up-image.png';
import CustomButton from '../../components/CustomButton/CustomButton';

const BuildUp = ({matches}) => {
  return (
    <>
      {!matches ? (
        <div style={{
          height: '60vh',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPositionX: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}>
          <div style={{
            width: '75%',
            paddingTop: '150px',
          }}>
            <Typography
              color="secondary"
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                marginBottom: '10px',
              }}
            >
              SITIO EN COCCIÓN
            </Typography>
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                marginBottom: '30px',
              }}
            >
              ¡Estamos preparando nuestra web para ti!
              <br></br>
              No te quedes sin disfrutar nuestros productos.
            </Typography>
            <CustomButton
              text="CONTACTANOS"
              color="secondary"
              hoverColor="#98C8BB"
              size="large"
              href="https://www.instagram.com/annete_lafolieduchocolat/"
            />
          </div>
        </div>
      ) : (
        <>
          <div style={{
            width: '100%',
            marginTop: '50px',
          }}>
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                marginBottom: '10px',
              }}
            >
              SITIO EN COCCIÓN
            </Typography>
            <Typography
              color="secondary"
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                marginBottom: '30px',
              }}
            >
              ¡Estamos preparando nuestra web para ti!
              <br></br>
              No te quedes sin disfrutar nuestros productos.
            </Typography>
            <CustomButton
              text="CONTACTANOS"
              color="secondary"
              hoverColor="#98C8BB"
              size="medium"
              href="https://www.instagram.com/annete_lafolieduchocolat/"
            />
          </div>
          <div style={{
            height: '30vh',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPositionX: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}>
          </div>
        </>
      )}
    </>
  );
};

BuildUp.propTypes = {
  matches: PropTypes.bool,
};

export default BuildUp;
