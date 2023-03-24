import React from 'react';
import './footer.scss';
import {Avatar, Grid, Typography, IconButton, Link} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from '../../assets/anette-logo-white.png';

const Footer = () => {
  return (
    <section className="footer-section">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={3} className="logo-container">
          <div>
            <Avatar
              src={Image}
              variant="square"
              sx={{
                width: '200px',
                height: '200px',
              }}
            />
            <IconButton
              className="icon-button"
              aria-label="mail"
              component={Link}
              href="mailto:fakeuser@fakeemail.com"
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              className="icon-button"
              aria-label="instagram"
              component={Link}
              href="https://github.com/muhimasri"
              target="_blank"
            >

              <InstagramIcon color="#FAFAFA" />
            </IconButton>
            <IconButton
              className="icon-button"
              aria-label="wpp chat"
              component={Link}
              href="https://wa.me/56954531193?text=Hola%20Ana!"
              target="_blank"
            >

              <WhatsAppIcon color="#FAFAFA" />
            </IconButton>
          </div>
        </Grid>
        <Grid item md={3}>
          <Typography
            color="#FAFAFA"
            align='left'
            gutterBottom
          >
                        CONTACTO
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Retiro en:</strong>
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
          >
                        Vitacura
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Horarios:</strong>
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
          >
                        Lunes a Viernes de 10:00 a 19:00 hrs
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Horarios:</strong>
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
          >
                        Lunes a Viernes de 10:00 a 19:00 hrs
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Despachos:</strong>
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
          >
                        Se realizan de Lunes a Sábado entre 10:00 a 18:30hrs.

          </Typography>
        </Grid>
        <Grid item md={3} className="footer-item-container">
          <Typography
            color="#FAFAFA"
            align='left'
            gutterBottom
          >
                        INFORMACION
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Retiro y Despacho</strong>
          </Typography>
        </Grid>
        <Grid item md={3} className="footer-item-container">
          <Typography
            color="#FAFAFA"
            align='left'
            gutterBottom
          >
                        POLITICAS
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Politicas de Privacidad</strong>
          </Typography>
          <Typography
            color="#FAFAFA"
            align='left'
            variant='body2'
            className="footer-subtitle"
          >
            <strong>Terminos y Condiciones</strong>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
