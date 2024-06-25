import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Avatar,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import './contact-us.scss';
import Image from '../../assets/annete-logo-square.png';

const ContactUs = ({matches}) => {
  return (
    <section className="contact-us-section">
      <div className="contact-us-container" id="contacto">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12} md={6}>
            <Avatar
              src={Image}
              variant="square"
              sx={{
                width: '440px',
                height: '440px',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
                  variant="h6"
                  color="secondary"
                  className="title"
                >
                  CONTACTO
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  color="secondary"
                  className="description"
                >
                  ¿Tienes alguna pregunta? Estamos aquí para ayudar.
                  Envíenos un mensaje y estaremos en contacto a la brevedad.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Telefono"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Consulta"
                  variant="outlined"
                  multiline
                  rows={3}
                  fullWidth
                  color="secondary"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  variant="contained"
                  sx={{
                    'marginTop': '10px',
                    'borderRadius': '0px',
                    'color': 'white',
                    'backgroundColor': '#98C8BB',
                    'boxShadow': 'none',
                    '&:hover': {
                      backgroundColor: '#77b6a5',
                      boxShadow: 'none',
                    },
                  }}
                  size="medium"
                >
                  ENVIAR
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

ContactUs.propTypes = {
  matches: PropTypes.bool,
};

export default ContactUs;
