import React from 'react';
import {Grid, Avatar, Typography} from '@mui/material';
import Image from '../../assets/anette-about-me.jpeg';
import './about-me.scss';

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div
        className="about-me-container"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} md={4}>
            <Avatar
              src={Image}
              variant="square"
              sx={{
                width: '100%',
                height: '70vh',
              }}
            />
          </Grid>
          <Grid item md={1} className="v-line-container">
            <div className="v-line" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="secondary"
              gutterBottom
              variant="h4"
              align="left"
              sx={{marginTop: '100px'}}
            >
                            NOSOTROS
            </Typography>
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              align="left"
            >
                            Quisiera contarles un poco de mí y cómo
                            nació ANNETE. Mi nombre es Ana y soy
                            extranjera, mi vida era muy diferente en
                            Argentina, soy Lic en Relaciones
                            Internacionales pero hace 10 años atrás,
                            cuando llegue a Chile, mi vida cambió de un
                            día para el otro.
            </Typography>
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              align="left"
            >
                            Luego de haber estado buscando trabajo
                            por mucho tiempo, decidí meterme por
                            completo en el que siempre había sido mi
                            hobbie, cocinar, así fue que, empecé a
                            estudiar la carrera de gastronomía
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutMe;
