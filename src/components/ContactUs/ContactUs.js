import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './contact-us.scss';

const ContactUs = ({matches}) => {
  return (
    <div className="contact-us-container" id="contacto">
      <Typography
        color="secondary"
        gutterBottom
        variant="h5"
        component="div"
        className="title"
      >
        CONTACTO
      </Typography>
      <Typography
        color="secondary"
        gutterBottom
        variant="h6"
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
          xs={12}
          sx={
            !matches ? (
              {
                display: 'flex',
                placeContent: 'end',
                paddingRight: '20px',
              }) : ({
                display: 'flex',
                placeContent: 'center',
                marginBottom: '20px',
              })}
        >
          <Card
            sx={{
              height: !matches ? '200px' : '150px',
              width: !matches ? '210px' : '160px',
              borderRadius: 0,
              border: 'solid #708DC7',
              boxShadow: 0,

            }}
            className="custom-card"
          >
            <CardActionArea href="https://wa.me/56954531193?text=Hola%20Ana!">
              <CardMedia
                sx={{padding: '20px 10px 10px'}}
                alt="whatsapp"
              >
                <WhatsAppIcon
                  className="card-image"
                  color="secondary"
                  sx={{fontSize: !matches ? '64px' : '32px'}}
                />
              </CardMedia>
              <CardContent sx={{paddingTop: '0'}}>
                <hr
                  size="8px"
                  color="#708DC7"
                  width="40%"
                  style={{marginBottom: '20px'}}
                  className="card-separator"
                />
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="body2"
                  component="div"
                  className="card-title"
                  sx={matches && {fontSize: '12px'}}
                >
                  <strong>CONTACTANOS POR<br/>WHATSAPP</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={
            !matches ? (
            {
              display: 'flex',
              placeContent: 'start',
              paddingLeft: '20px',
            }) : ({
              display: 'flex',
              placeContent: 'center',
              marginBottom: '20px',
            })
          }
        >
          <Card
            sx={{
              height: !matches ? '200px' : '150px',
              width: !matches ? '210px' : '160px',
              borderRadius: 0,
              border: 'solid #708DC7',
              boxShadow: 0,

            }}
            className="custom-card"
          >
            <CardActionArea href="https://instagram.com/annete_lafolieduchocolat">
              <CardMedia
                sx={{padding: '20px 10px 10px'}}
                alt="whatsapp"
              >
                <InstagramIcon
                  className="card-image"
                  color="secondary"
                  sx={{fontSize: !matches ? '64px' : '32px'}}
                />
              </CardMedia>
              <CardContent sx={{paddingTop: '0'}}>
                <hr
                  size="8px"
                  color="#708DC7"
                  width="40%"
                  style={{marginBottom: '20px'}}
                  className="card-separator"
                />
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="body2"
                  component="div"
                  className="card-title"
                  sx={matches && {fontSize: '12px'}}
                >
                  <strong>SEGUINOS EN<br/>INSTAGRAM</strong>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

ContactUs.propTypes = {
  matches: PropTypes.bool,
};

export default ContactUs;
