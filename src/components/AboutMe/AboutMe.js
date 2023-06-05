import React from 'react';
import PropTypes from 'prop-types';
import {useScrollWithShadow} from '../../customHooks/shadowHook';
import {Grid, Avatar, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from '../../assets/anette-about-me.jpeg';
import './about-me.scss';

const AboutMe = ({matches}) => {
  const {boxShadow, onScrollHandler} = useScrollWithShadow();
  return (
    <section className="about-me-section" id="about-me">
      <div
        className={
          matches ? 'about-me-container-without-margin' : 'about-me-container'
        }
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12} md={4}>
            <Avatar
              src={Image}
              variant="square"
              sx={{
                width: '100%',
                height: '80vh',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              color="secondary"
              gutterBottom
              variant="h4"
              align={matches ? 'center' : 'left'}
              sx={
                matches ?
                  {marginTop: '40px'} :
                  {marginTop: '250px', marginLeft: '25px'}
              }
            >
              NOSOTROS
            </Typography>
            <div
              style={{
                height: '20px',
                marginTop: '10px',
                marginBottom: '10px',
              }}>
              {boxShadow.top &&
                <ExpandLessIcon
                  color='secondary'
                  fontSize='large'
                />}
            </div>
            <div
              onScroll={onScrollHandler}
              className="about-me-text"
            >
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="left"
                sx={{marginRight: '50px'}}
              >
                Quisiera contarles un poco de mí y cómo nació ANNETE.
                Mi nombre es Ana y soy extranjera,
                mi vida era muy diferente en Argentina,
                soy Lic en Relaciones Internacionales pero hace 10 años atrás,
                cuando llegue a Chile, mi vida cambió de un día para el otro
              </Typography>
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="left"
                sx={{marginRight: '50px'}}
              >
                Luego de haber estado buscando trabajo por mucho tiempo,
                decidí meterme por completo en el que siempre había sido
                mi hobbie, cocinar, así fue que, empecé a estudiar la
                carrera de gastronomía y luego seguí capacitándome en
                pastelería, que es lo que más amo hacer
              </Typography>
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="left"
                sx={{marginRight: '50px'}}
              >
                Por suerte pude viajar por varios lugares del mundo y adoptar
                técnicas como tendencias que hacen que mi trabajo sea de
                calidad, para eso quiero contarles que utilizo materia
                prima premium y natural, el concepto de ANNETE,
                es que un pastel no solo debe verse bien, sino saber
                maravilloso, que cada bocado sea un conjunto de texturas
                y sabores únicos
              </Typography>
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="left"
                sx={{marginRight: '50px'}}
              >
                Para lograr eso, trabajo de manera artesanal y con mucho amor
                para que cada uno de nuestros productos sea una experiencia
                única
              </Typography>
            </div>
            <div style={{height: '20px'}}>
              {boxShadow.down &&
                <ExpandMoreIcon
                  color='secondary'
                  fontSize='large'
                />}
            </div>
          </Grid>
        </Grid>
      </div>
    </section >
  );
};

AboutMe.propTypes = {
  matches: PropTypes.string,
};

export default AboutMe;
