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
import {useNavigationStore} from '../../stores/useNavigationStore';
import * as Routes from '../../constants/routes';
import {useNavigate} from 'react-router-dom';

const Footer = ({matches, fullScreen}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'footer-mobile';
    }
    if (fullScreen) {
      return 'footer-full-screen';
    }
    return 'footer';
  };
  const defaultClassName = getDefaultClassName();

  const setPrimary = useNavigationStore((state) => state.setPrimary);
  const setSecondary = useNavigationStore((state) => state.setSecondary);

  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };

  const textColor = '#FAFAFA';
  return (
    <>
      {matches ? (
        <section className={defaultClassName}>
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
                      className="link-section"
                      href={`${Routes.HOME}#patisserie`}
                      onClick={() => {
                        setPrimary('patisserie');
                      }}
                    >
                      PÂTISSERIE
                    </Link>
                  </div>
                  <div style={{marginBottom: '26px', justifySelf: 'self-end'}}>
                    <Link
                      className="link-section"
                      href={`${Routes.HOME}#nosotros`}
                      onClick={() => {
                        setPrimary('nosotros');
                        setSecondary('');
                      }}
                    >
                      SOBRE MI
                    </Link>
                  </div>
                  <div style={{marginBottom: '26px', justifySelf: 'self-end'}}>
                    <Link
                      className="link-section"
                      href={`${Routes.HOME}#contacto`}
                      onClick={() => {
                        setPrimary('contacto');
                        setSecondary('');
                      }}
                    >
                      CONTACTO
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item md={12} xs={12} style={{alignSelf: 'start'}}>
                <Link
                  className="link-section"
                  href={`${Routes.TERMS_AND_CONDITIONS}`}
                >
                  TÉRMINOS Y CONDICIONES
                </Link>
              </Grid>
              <Grid item md={12} xs={12} style={{alignSelf: 'start'}}>
                <hr style={{
                  marginTop: '20px',
                  width: '100%',
                  backgroundColor: '#FAFAFA',
                  height: '1px',
                  border: 0,
                }} />
              </Grid>
              <Grid item md={12} xs={12} style={{alignSelf: 'start'}}>
                <Typography
                  color={textColor}
                  align='center'
                  variant='body2'
                  className="footer-text"
                >
                  © 2024 Todos los derechos reservados | ANNETE
                </Typography>
              </Grid>
            </Grid>
          </div>
        </section>
      ) : (
        <section className={defaultClassName}>
          <div className={`${defaultClassName}-section`}>
            <div>
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
                  <div style={{paddingTop: '16px', display: 'flex', paddingBottom: '16px'}}>
                    <Link
                      className="link-section"
                      href={`${Routes.TERMS_AND_CONDITIONS}`}
                    >
                      TÉRMINOS Y CONDICIONES
                    </Link>
                  </div>
                </Grid>
                <Grid item md={2} xs={6} style={{alignSelf: 'start'}}>
                  <div style={{display: 'grid'}}>
                    <div style={{marginBottom: '20px', display: 'flex'}}>
                      <Link
                        className="link-section"
                        onClick={() => {
                          setPrimary('patisserie');
                          setSecondary('tortas');
                          handleClick(Routes.TORTAS);
                        }}
                      >
                        TORTAS
                      </Link>
                    </div>
                    <div style={{marginBottom: '20px', display: 'flex'}}>
                      <Link
                        className="link-section"
                        onClick={() => {
                          setPrimary('patisserie');
                          setSecondary('tartas-clasicas');
                          handleClick(Routes.TARTAS_CLASICAS);
                        }}
                      >
                        TARTAS CLASICAS
                      </Link>
                    </div>
                    <div style={{marginBottom: '20px', display: 'flex'}}>
                      <Link
                        className="link-section"
                        onClick={() => {
                          setPrimary('patisserie');
                          setSecondary('macarons');
                          handleClick(Routes.MACARONS);
                        }}
                      >
                        MACARONS
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid item md={2} xs={6} style={{alignSelf: 'start'}}>
                  <div style={{display: 'grid', placeItems: 'flex-end'}}>
                    <div style={{marginBottom: '20px', display: 'flex'}}>
                      <Link
                        className="link-section"
                        onClick={() => {
                          setPrimary('patisserie');
                          setSecondary('cookies');
                          handleClick(Routes.COOKIES);
                        }}
                      >
                        COOKIES
                      </Link>
                    </div>
                    <div style={{marginBottom: '20px', display: 'flex'}}>
                      <Link
                        className="link-section"
                        onClick={() => {
                          setPrimary('patisserie');
                          setSecondary('travel-cakes');
                          handleClick(Routes.TRAVEL_CAKES);
                        }}
                      >
                        TRAVEL CAKES
                      </Link>
                    </div>
                    <div style={{marginBottom: '20px', display: 'flex'}}>
                      <Link
                        className="link-section"
                        onClick={() => {
                          setPrimary('patisserie');
                          setSecondary('tartas-vitrina');
                          handleClick(Routes.TORTAS_VITRINA);
                        }}
                      >
                        TORTAS MODERNAS
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
                    © 2024 Todos los derechos reservados | ANNETE
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

Footer.propTypes = {
  image: PropTypes.string,
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Footer;
