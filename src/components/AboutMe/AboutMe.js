import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, Avatar, Typography, IconButton} from '@mui/material';
import Image from '../../assets/anette-about-me.jpeg';
import './about-me.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AboutMe = ({matches}) => {
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
          spacing={0}
        >
          <Grid item xs={12} md={5} sx={{
            alignSelf: 'end',
            textAlign: '-webkit-center',
          }}>
            <Avatar
              src={Image}
              variant="square"
              sx={!matches ? {
                width: '420px',
                height: '620px',
              } : {
                width: '100%',
                height: '60vh',
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              align={matches ? 'center' : 'left'}
              sx={
                matches ?
                  {marginTop: '40px'} :
                  {
                    marginTop: '250px',
                    marginLeft: '70px',
                    fontFamily: 'Chequersdemo',
                    fontSize: '30px',
                  }
              }
            >
              NOSOTROS
            </Typography>
            {!matches ? (
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="left"
                sx={{
                  fontFamily: 'BozonRegular',
                  fontSize: '18px',
                  marginLeft: '70px',
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                }}
              >
                Soy Ana, Lic en Relaciones Internacionales y diez años atrás,
                cuando llegue a Chile, mi vida cambió de un día para el otro,
                me sumergí por completo en el que siempre había sido mi hobbie.
                Así fue que, empecé a estudiar la carrera de gastronomía y
                luego seguí capacitándome en pastelería, que es lo que más
                amo hacer. Durante estos años, he adoptado técnicas,
                como tendencias que hacen que mi trabajo sea de calidad,
                para eso quiero contarles que utilizo materia prima premium y
                natural. El concepto de ANNETE, es que un pastel no solo
                debe verse bien, sino saber maravilloso, que cada bocado
                sea un conjunto de texturas y sabores únicos.
                Para lograr eso, trabajo de manera artesanal y
                con mucho amor para que cada uno de nuestros productos
                sea una experiencia única.
              </Typography>
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
                  <AddIcon fontSize='inherit' />
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
                {viewMore && <IconButton
                  onClick={() => setViewMore(false)}
                  className="view-more-button"
                  size="large"
                >
                  <RemoveIcon fontSize='inherit' />
                </IconButton>
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
