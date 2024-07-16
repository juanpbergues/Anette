/* eslint-disable max-len */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, Avatar, Typography, IconButton} from '@mui/material';
import Image from '../../assets/anette-about-me.jpeg';
import './about-me.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const AboutMe = ({matches}) => {
  const defaultClassName = matches ? 'about-me-mobile' : 'about-me';
  const [viewMore, setViewMore] = useState(false);
  return (
    <section
      className={`${defaultClassName}-section`}
      id="nosotros"
    >
      <div
        className={`${defaultClassName}-container`}
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
                height: '50vh',
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              align='left'
              sx={
                matches ?
                  {
                    marginTop: '40px',
                    fontFamily: 'Chequersdemo',
                    fontSize: '26px',
                  } : {
                    marginLeft: '60px',
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
                  marginLeft: '60px',
                  textAlign: 'left',
                }}
              >
                Soy Ana, Licenciada en Relaciones Internacionales. Hace diez años, cuando llegué a Chile, mi vida cambió radicalmente. Me sumergí por completo en mi pasión de siempre: la gastronomía. Así comencé a estudiar la carrera de gastronomía y, posteriormente, me especialicé en pastelería, que es lo que más amo hacer. <br></br>
                A lo largo de estos años, he adoptado técnicas y tendencias que garantizan que mi trabajo sea de la más alta calidad. Por eso, quiero contarles que en Annette utilizamos solo materia prima premium y natural. <br></br>
                El concepto de Annette es que un pastel no solo debe verse bien, sino también saber maravilloso. Cada bocado debe ser una combinación única de texturas y sabores. Para lograr esto, trabajo de manera artesanal y con mucho amor, asegurando que cada uno de nuestros productos sea una experiencia única.
              </Typography>
            ) : (
              <div
                className="about-me-text-mobile"
              >
                <Typography
                  color="secondary"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                  align="center"
                >
                  Soy Ana, Licenciada en Relaciones Internacionales. Hace diez años, cuando llegué a Chile, mi vida cambió radicalmente. Me sumergí por completo en mi pasión de siempre: la gastronomía. Así comencé a estudiar la carrera de gastronomía y, posteriormente, me especialicé en pastelería, que es lo que más amo hacer.
                </Typography>
                {!viewMore && <IconButton
                  onClick={() => setViewMore(true)}
                  size="large"
                  sx={{marginTop: '20px'}}
                >
                  <ExpandMoreIcon color='secondary' fontSize='large'/>
                </IconButton>
                }
                {viewMore && <Typography
                  color="secondary"
                  sx={{
                    fontFamily: 'BozonRegular',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                  align="center"
                >
                  A lo largo de estos años, he adoptado técnicas y tendencias que garantizan que mi trabajo sea de la más alta calidad. Por eso, quiero contarles que en Annette utilizamos solo materia prima premium y natural. <br></br>
                  El concepto de Annette es que un pastel no solo debe verse bien, sino también saber maravilloso. Cada bocado debe ser una combinación única de texturas y sabores. Para lograr esto, trabajo de manera artesanal y con mucho amor, asegurando que cada uno de nuestros productos sea una experiencia única.
                </Typography>
                }
                {viewMore && <IconButton
                  onClick={() => setViewMore(false)}
                  href='/#nosotros'
                  size="large"
                  sx={{marginTop: '20px'}}
                >
                  <ExpandLessIcon color='secondary' fontSize='large' />
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
