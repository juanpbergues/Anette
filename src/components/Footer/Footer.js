import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import {Avatar, Grid, Typography, IconButton, Link} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from '../../assets/anette-logo-white.png';

const Footer = ({matches}) => {
  const textColor = '#FAFAFA';
  return (
    <section className="footer-section">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item md={3} xs={6} className="logo-container">
          <div>
            <Avatar
              src={Image}
              variant="square"
              sx={!matches ? ({
                width: '200px',
                height: '200px',
              }) : ({
                width: '150px',
                height: '150px',
              })}
            />
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
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography
            color={textColor}
            align='left'
            gutterBottom
            sx={matches && {fontSize: '14px'}}
          >
            INFORMACIÓN
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            className="footer-subtitle"
            sx={matches && {fontSize: '12px'}}
          >
            <strong>Retiro en:</strong>
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            sx={matches && {fontSize: '12px'}}
          >
            Vitacura
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            className="footer-subtitle"
            sx={matches && {fontSize: '12px'}}
          >
            <strong>Horarios:</strong>
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            sx={matches && {fontSize: '12px'}}
          >
            Lunes a Viernes de 10:00 a 19:00 hrs
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            className="footer-subtitle"
            sx={matches && {fontSize: '12px'}}
          >
            <strong>Contacto:</strong>
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            sx={matches && {fontSize: '12px'}}
          >
            +56 9 5453 1193
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            sx={matches && {fontSize: '12px'}}
          >
            annete.patisserie@gmail.com
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            className="footer-subtitle"
            sx={matches && {fontSize: '12px'}}
          >
            <strong>Despachos:</strong>
          </Typography>
          <Typography
            color={textColor}
            align='left'
            variant='body2'
            sx={matches && {fontSize: '12px'}}
          >
            Se realizan de Lunes a Sábado entre 10:00 a 18:30hrs.

          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

Footer.propTypes = {
  image: PropTypes.string,
  matches: PropTypes.bool,
};

export default Footer;
