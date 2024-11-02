/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Avatar,
  Typography,
  IconButton,
  Link,
} from '@mui/material';
import './contact-with-qr.scss';
import Image from '../../assets/annete-qr.png';
import ImageMobile from '../../assets/annete-logo-square-blue.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';


const ContactWithQR = ({matches, fullScreen}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'contact-with-qr-mobile';
    }
    if (fullScreen) {
      return 'contact-with-qr-full-screen';
    }
    return 'contact-with-qr';
  };

  const defaultClassName = getDefaultClassName();

  return (
    <>
      {matches ? (
        <section className={defaultClassName}>
          <div className={`${defaultClassName}-container`} id="contacto">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12} md={7}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} md={12}>
                    <Typography
                      align="left"
                      color="secondary"
                      sx={{
                        fontFamily: 'Chequersdemo',
                        fontSize: '26px',
                        marginBottom: '10px',
                      }}
                    >
                      CONTACTO
                    </Typography>
                    <Typography
                      align="left"
                      color="secondary"
                      sx={{
                        fontFamily: 'BozonRegular',
                        fontSize: '16px',
                        marginBottom: '10px',
                        maxWidth: '520px',
                      }}
                    >
                      ¡Estamos aquí para ayudarte!
                      Envíanos un mensaje a través de los
                      siguientes medios y responderemos a la brevedad.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      sx={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid #98c8bb',
                      }}
                      href="mailto:annete.patisserie@gmail.com"
                    >
                      <MailOutlineIcon
                        fontSize='medium'
                        sx={{
                          color: '#98c8bb',
                        }}
                      />
                    </IconButton>
                    <Link
                      sx={{
                        marginLeft: '10px',
                        fontFamily: 'BozonRegular',
                        fontSize: '16px',
                        color: '#98c8bb',
                      }}
                      underline="none"
                      href="mailto:annete.patisserie@gmail.com"
                    >
                      annete.patisserie@gmail.com
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      sx={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid #98c8bb',
                      }}
                      href="https://instagram.com/annete_lafolieduchocolat"
                      target="_blank"
                    >
                      <InstagramIcon
                        fontSize='medium'
                        sx={{
                          color: '#98c8bb',
                        }}
                      />
                    </IconButton>
                    <Link
                      sx={{
                        marginLeft: '10px',
                        fontFamily: 'BozonRegular',
                        fontSize: '16px',
                        color: '#98c8bb',
                      }}
                      underline="none"
                      href="https://instagram.com/annete_lafolieduchocolat"
                      target="_blank"
                    >
                      annete_lafolieduchocolat
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      sx={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid #98c8bb',
                      }}
                      href="https://wa.me/56954531193?text=Hola%20Ana!"
                      target="_blank"
                    >
                      <WhatsAppIcon
                        fontSize='medium'
                        sx={{
                          color: '#98c8bb',
                        }}
                      />
                    </IconButton>
                    <Link
                      sx={{
                        marginLeft: '10px',
                        fontFamily: 'BozonRegular',
                        fontSize: '16px',
                        color: '#98c8bb',
                      }}
                      underline="none"
                      href="https://wa.me/56954531193?text=Hola%20Ana!"
                      target="_blank"
                    >
                      +56 9 54531193
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className={`${defaultClassName}-container__avatar`}>
                  <Avatar
                    src={ImageMobile}
                    variant="square"
                    sx={{
                      marginTop: '20px',
                      width: '210px',
                      height: '210px',
                    }}
                  />
                </div>
                <Typography
                  align="center"
                  color="secondary"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                  }}
                >
                  ¡Síguenos en nuestro Instagram<br></br>
                  y descubre nuestras novedades!
                </Typography>
              </Grid>
            </Grid>
          </div>
        </section>
      ) : (
        <section className={defaultClassName}>
          <div className={`${defaultClassName}-container`} id="contacto">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  align="left"
                  color="secondary"
                  sx={fullScreen ? {
                    fontFamily: 'Chequersdemo',
                    fontSize: '30px',
                    marginBottom: '10px',
                  }:{
                    fontFamily: 'Chequersdemo',
                    fontSize: '26px',
                    marginBottom: '10px',
                  }}
                >
                  CONTACTO
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12} md={7}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} md={12}>
                    <Typography
                      align="left"
                      color="secondary"
                      sx={fullScreen ? {
                        fontFamily: 'BozonRegular',
                        fontSize: '18px',
                        marginBottom: '10px',
                        maxWidth: '520px',
                      }:{
                        fontFamily: 'BozonRegular',
                        fontSize: '14px',
                        marginBottom: '10px',
                        maxWidth: '400px',
                      }}
                    >
                      ¡Estamos aquí para ayudarte!
                      Envíanos un mensaje a través de los
                      siguientes medios y responderemos a la brevedad.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      sx={fullScreen ? {
                        width: '72px',
                        height: '72px',
                        border: '3px solid #98c8bb',
                      }:{
                        width: '50px',
                        height: '50px',
                        border: '2px solid #98c8bb',
                      }}
                      href="mailto:annete.patisserie@gmail.com"
                    >
                      <MailOutlineIcon
                        fontSize={fullScreen ? 'large' : 'medium'}
                        sx={{
                          color: '#98c8bb',
                        }}
                      />
                    </IconButton>
                    <Link
                      sx={fullScreen ? {
                        marginLeft: '15px',
                        fontFamily: 'BozonRegular',
                        fontSize: '18px',
                        color: '#98c8bb',
                      }:{
                        marginLeft: '15px',
                        fontFamily: 'BozonRegular',
                        fontSize: '14px',
                        color: '#98c8bb',
                      }}
                      underline="none"
                      href="mailto:annete.patisserie@gmail.com"
                    >
                      annete.patisserie@gmail.com
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      sx={fullScreen ? {
                        width: '72px',
                        height: '72px',
                        border: '3px solid #98c8bb',
                      }:{
                        width: '50px',
                        height: '50px',
                        border: '2px solid #98c8bb',
                      }}
                      href="https://instagram.com/annete_lafolieduchocolat"
                      target="_blank"
                    >
                      <InstagramIcon
                        fontSize={fullScreen ? 'large' : 'medium'}
                        sx={{
                          color: '#98c8bb',
                        }}
                      />
                    </IconButton>
                    <Link
                      sx={fullScreen ? {
                        marginLeft: '15px',
                        fontFamily: 'BozonRegular',
                        fontSize: '18px',
                        color: '#98c8bb',
                      }:{
                        marginLeft: '15px',
                        fontFamily: 'BozonRegular',
                        fontSize: '14px',
                        color: '#98c8bb',
                      }}
                      underline="none"
                      href="https://instagram.com/annete_lafolieduchocolat"
                      target="_blank"
                    >
                      annete_lafolieduchocolat
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      sx={fullScreen ? {
                        width: '72px',
                        height: '72px',
                        border: '3px solid #98c8bb',
                      }:{
                        width: '50px',
                        height: '50px',
                        border: '2px solid #98c8bb',
                      }}
                      href="https://wa.me/56954531193?text=Hola%20Ana!"
                      target="_blank"
                    >
                      <WhatsAppIcon
                        fontSize={fullScreen ? 'large' : 'medium'}
                        sx={{
                          color: '#98c8bb',
                        }}
                      />
                    </IconButton>
                    <Link
                      sx={fullScreen ? {
                        marginLeft: '15px',
                        fontFamily: 'BozonRegular',
                        fontSize: '18px',
                        color: '#98c8bb',
                      }:{
                        marginLeft: '15px',
                        fontFamily: 'BozonRegular',
                        fontSize: '14px',
                        color: '#98c8bb',
                      }}
                      underline="none"
                      href="https://wa.me/56954531193?text=Hola%20Ana!"
                      target="_blank"
                    >
                      +56 9 54531193
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className={`${defaultClassName}-container__avatar`}>
                  <Avatar
                    src={Image}
                    variant="square"
                    sx={fullScreen ? {
                      width: '300px',
                      height: '310px',
                    }:{
                      width: '240px',
                      height: '250px',
                    }}
                  />
                </div>
                <Typography
                  align="center"
                  color="secondary"
                  sx={fullScreen ? {
                    fontFamily: 'BozonBold',
                    fontSize: '18px',
                    marginBottom: '10px',
                  }:{
                    fontFamily: 'BozonBold',
                    fontSize: '16px',
                    marginBottom: '10px',
                  }}
                >
                  ¡Escanea el código QR y siguenos
                  <br></br>en nuestro Instagram!
                </Typography>
              </Grid>
            </Grid>
          </div>
        </section>
      )}</>
  );
};

ContactWithQR.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default ContactWithQR;
