/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import {Grid, Typography, IconButton, Link} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from '../../assets/annete-white-text-logo.png';
import ImageMobile from '../../assets/annete-logo-horizontal-white.png';

const Footer = ({matches}) => {
  const textColor = '#FAFAFA';
  return (
    <>
      {matches ? (
        <section className="footer-section-mobile">
          <div style={{
            width: '85%',
          }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item md={4} xs={12} className="logo-container">
                <div>
                  <img
                    src={ImageMobile}
                    width="100%"
                    style={{
                      marginBottom: '10px',
                    }}
                  />
                  <div>
                    <IconButton
                      className="icon-button"
                      aria-label="mail"
                      component={Link}
                      href="mailto:annete.patisserie@gmail.com"
                    >
                      <MailOutlineIcon />
                    </IconButton>
                    <IconButton
                      className="icon-button"
                      aria-label="instagram"
                      component={Link}
                      href="https://instagram.com/annete_lafolieduchocolat"
                      target="_blank"
                    >

                      <InstagramIcon color={textColor} />
                    </IconButton>
                    <IconButton
                      className="icon-button"
                      aria-label="wpp chat"
                      component={Link}
                      href="https://wa.me/56954531193?text=Hola%20Ana!"
                      target="_blank"
                    >

                      <WhatsAppIcon color={textColor} />
                    </IconButton>
                  </div>
                </div>
              </Grid>
              <Grid item md={4} xs={6} style={{alignSelf: 'start'}}>
                <Typography
                  color={textColor}
                  align='left'
                  gutterBottom
                  className="footer-title"
                >
                  INFORMACIÓN
                </Typography>
                <Typography
                  color={textColor}
                  align='left'
                  variant='body2'
                  className="footer-text"
                >
                  Vitacura, Santiago de Chile, Chile
                </Typography>
                <Typography
                  color={textColor}
                  align='left'
                  variant='body2'
                  className="footer-text"
                >
                  +56 9 5453 1193
                </Typography>
                <Typography
                  color={textColor}
                  align='left'
                  variant='body2'
                  className="footer-text"
                >
                  annete.patisserie@gmail.com
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} style={{alignSelf: 'start'}}>
                <div style={{display: 'grid'}}>
                  <div style={{marginBottom: '26px', justifySelf: 'self-end'}}>
                    <Link
                      component="button"
                      className="link-section"
                      onClick={() => {
                        console.info('I\'m a button.');
                      }}
                    >
                      PÂTISSERIE
                    </Link>
                  </div>
                  <div style={{marginBottom: '26px', justifySelf: 'self-end'}}>
                    <Link
                      component="button"
                      className="link-section"
                      onClick={() => {
                        console.info('I\'m a button.');
                      }}
                    >
                      NOSOTROS
                    </Link>
                  </div>
                  <div style={{marginBottom: '26px', justifySelf: 'self-end'}}>
                    <Link
                      component="button"
                      className="link-section"
                      onClick={() => {
                        console.info('I\'m a button.');
                      }}
                    >
                      CONTACTO
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item md={12} xs={12} style={{alignSelf: 'start'}}>
                <Typography
                  color={textColor}
                  align='center'
                  variant='body2'
                  className="footer-text"
                >
                  © 2024 Todos los derechos reservados | ANNETE La Folie du Chocolat
                </Typography>
              </Grid>
            </Grid>
          </div>
        </section>
      ) : (
        <section className="footer-section">
          <div style={{
            width: '1024px',
          }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item md={4} xs={12} className="logo-container">
                <div>
                  <img
                    src={Image}
                    width={200}
                    style={{
                      marginBottom: '10px',
                    }}
                  />
                  <div>
                    <IconButton
                      className="icon-button"
                      aria-label="mail"
                      component={Link}
                      href="mailto:annete.patisserie@gmail.com"
                    >
                      <MailOutlineIcon />
                    </IconButton>
                    <IconButton
                      className="icon-button"
                      aria-label="instagram"
                      component={Link}
                      href="https://instagram.com/annete_lafolieduchocolat"
                      target="_blank"
                    >

                      <InstagramIcon color={textColor} />
                    </IconButton>
                    <IconButton
                      className="icon-button"
                      aria-label="wpp chat"
                      component={Link}
                      href="https://wa.me/56954531193?text=Hola%20Ana!"
                      target="_blank"
                    >

                      <WhatsAppIcon color={textColor} />
                    </IconButton>
                  </div>
                </div>
              </Grid>
              <Grid item md={4} xs={6} style={{alignSelf: 'start'}}>
                <Typography
                  color={textColor}
                  align='left'
                  gutterBottom
                  className="footer-title"
                >
                  INFORMACIÓN
                </Typography>
                <Typography
                  color={textColor}
                  align='left'
                  variant='body2'
                  className="footer-text"
                >
                  Vitacura, Santiago de Chile, Chile
                </Typography>
                <Typography
                  color={textColor}
                  align='left'
                  variant='body2'
                  className="footer-text"
                >
                  +56 9 5453 1193
                </Typography>
                <Typography
                  color={textColor}
                  align='left'
                  variant='body2'
                  className="footer-text"
                >
                  annete.patisserie@gmail.com
                </Typography>
              </Grid>
              <Grid item md={4} xs={6} style={{alignSelf: 'start'}}>
                <div style={{display: 'grid'}}>
                  <div style={{marginBottom: '20px'}}>
                    <Link
                      component="button"
                      className="link-section"
                      onClick={() => {
                        console.info('I\'m a button.');
                      }}
                    >
                      PÂTISSERIE
                    </Link>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                    <Link
                      component="button"
                      className="link-section"
                      onClick={() => {
                        console.info('I\'m a button.');
                      }}
                    >
                      NOSOTROS
                    </Link>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                    <Link
                      component="button"
                      className="link-section"
                      onClick={() => {
                        console.info('I\'m a button.');
                      }}
                    >
                      CONTACTO
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item md={12} xs={12} style={{alignSelf: 'start'}}>
                <Typography
                  color={textColor}
                  align='center'
                  variant='body2'
                  className="footer-text"
                >
                  © 2024 Todos los derechos reservados | ANNETE La Folie du Chocolat
                </Typography>
              </Grid>
            </Grid>
          </div>
        </section>
      )}
    </>
  );
};

Footer.propTypes = {
  image: PropTypes.string,
  matches: PropTypes.bool,
};

export default Footer;
