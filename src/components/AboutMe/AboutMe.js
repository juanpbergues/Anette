import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useScrollWithShadow} from '../../customHooks/shadowHook';
import {Grid, Avatar, Typography, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from '../../assets/anette-about-me.jpeg';
import './about-me.scss';
import AddIcon from '@mui/icons-material/Add';

const AboutMe = ({matches}) => {
  const {boxShadow, onScrollHandler} = useScrollWithShadow();
  const [viewMore, setViewMore] = useState(false);
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
            {!matches ? (
              <>
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
                    soy Lic en Relaciones Internacionales pero hace 10 años
                    atrás,
                    cuando llegue a Chile, mi vida cambió de un día para el
                    otro
                    <br></br>
                    Luego de haber estado buscando trabajo por mucho tiempo,
                    decidí meterme por completo en el que siempre había sido
                    mi hobbie, cocinar, así fue que, empecé a estudiar la
                    carrera de gastronomía y luego seguí capacitándome en
                    pastelería, que es lo que más amo hacer
                    <br></br>
                    Por suerte pude viajar por varios lugares del mundo y
                    adoptar
                    técnicas como tendencias que hacen que mi trabajo sea de
                    calidad, para eso quiero contarles que utilizo materia
                    prima premium y natural, el concepto de ANNETE,
                    es que un pastel no solo debe verse bien, sino saber
                    maravilloso, que cada bocado sea un conjunto de texturas
                    y sabores únicos
                    <br></br>
                    Para lograr eso, trabajo de manera artesanal y con mucho
                    amor
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
              </>
            ) : (
              <div
                className="about-me-text-mobile"
              >
                <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                >
                  Quisiera contarles un poco de mí y cómo nació ANNETE.
                  Mi nombre es Ana y soy extranjera,
                  mi vida era muy diferente en Argentina,
                  soy Lic en Relaciones Internacionales pero hace 10 años
                  atrás,
                  cuando llegue a Chile, mi vida cambió de un día para el
                  otro.
                </Typography>
                {!viewMore && <IconButton
                  onClick={() => setViewMore(true)}
                  className="view-more-button"
                  size="large"
                >
                  <AddIcon fontSize='inherit'/>
                </IconButton>
                }
                {viewMore && <Typography
                  color="secondary"
                  gutterBottom
                  variant="h6"
                  align="center"
                >
                  Luego de haber estado buscando trabajo por mucho tiempo,
                  decidí meterme por completo en el que siempre había sido
                  mi hobbie, cocinar, así fue que, empecé a estudiar la
                  carrera de gastronomía y luego seguí capacitándome en
                  pastelería, que es lo que más amo hacer.
                  <br></br>
                  Por suerte pude viajar por varios lugares del mundo y
                  adoptar
                  técnicas como tendencias que hacen que mi trabajo sea de
                  calidad, para eso quiero contarles que utilizo materia
                  prima premium y natural, el concepto de ANNETE,
                  es que un pastel no solo debe verse bien, sino saber
                  maravilloso, que cada bocado sea un conjunto de texturas
                  y sabores únicos.
                  <br></br>
                  Para lograr eso, trabajo de manera artesanal y con mucho
                  amor
                  para que cada uno de nuestros productos sea una experiencia
                  única.
                </Typography>
                }
              </div>
            )}
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
