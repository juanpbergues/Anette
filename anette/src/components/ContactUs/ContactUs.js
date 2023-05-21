import React from 'react';
import {Typography, Grid, CardContent, Paper} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '../CustomButton/CustomButton';
import './contact-us.scss';

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contact-us">
      <Typography
        color="secondary"
        gutterBottom
        variant="h4"
        component="div"
        className="title"
      >
        CONTACTANOS
      </Typography>
      <Typography
        color="secondary"
        gutterBottom
        variant="h5"
        component="div"
      >
        Contactate con nosotros por los distintos
        canales para conocer mas sobre ANNETE.
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{marginTop: '40px'}}
      >
        <Grid
          item
          lg={6}
          md={6}
          xs={6}
          sx={{display: 'flex', placeContent: 'end', paddingRight: '20px'}}
        >
          <Paper
            variant="outlined"
            sx={{width: '200px', border: '0'}}
          >
            <CardContent>
              <WhatsAppIcon
                color="secondary"
                sx={{fontSize: '64px', marginBottom: '20px'}}
              />
              <Button
                color="secondary"
                hoverColor="#98C8BB"
                text="Ingresa aqui"
                size="large"
              />
            </CardContent>
          </Paper>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={6}
          sx={{paddingLeft: '20px'}}
        >
          <Paper
            variant="outlined"
            sx={{width: '200px', border: '0'}}>
            <CardContent>
              <InstagramIcon
                color="secondary"
                sx={{fontSize: '64px', marginBottom: '20px'}}
              />
              <Button
                color="secondary"
                hoverColor="#98C8BB"
                text="Ingresa aqui"
                size="large"
              />
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
