/* eslint-disable max-len */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography, IconButton} from '@mui/material';
import Image from '../../assets/anette-about-me.jpeg';
import './about-me.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const AboutMe = ({matches, fullScreen}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'about-me-mobile';
    }
    if (fullScreen) {
      return 'about-me-full-screen';
    }
    return 'about-me';
  };

  const defaultClassName = getDefaultClassName();

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
            {matches ? (
              <img
                src={Image}
                style={{
                  width: '100%',
                  height: '50vh',
                }}
              />
            ):(
              <img
                src={Image}
                style={fullScreen ? {
                  width: '420px',
                  height: '100%',
                } : {
                  width: '350px',
                  height: '100%',
                }}
              />
            )}
          </Grid>
          <Grid item xs={12} md={7} sx={{alignSelf: 'self-end'}}>
            {matches ? (
            <Typography
              color="secondary"
              gutterBottom
              variant="h5"
              align='left'
              sx={{
                marginTop: '40px',
                fontFamily: 'Chequersdemo',
                fontSize: '26px',
              }}
            >
              SOBRE MI
            </Typography>
            ):(
              <Typography
                color="secondary"
                gutterBottom
                variant="h5"
                align='left'
                sx={
                  !fullScreen ?
                  {
                    marginTop: '0',
                    fontFamily: 'Chequersdemo',
                    fontSize: '26px',
                    marginLeft: '60px',
                  } : {
                    marginLeft: '60px',
                    fontFamily: 'Chequersdemo',
                    fontSize: '30px',
                  }
                }
              >
              SOBRE MI
              </Typography>
            )}
            {!matches ? (
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="left"
                sx={fullScreen ? {
                  fontFamily: 'BozonRegular',
                  fontSize: '18px',
                  marginLeft: '60px',
                  textAlign: 'left',
                  lineHeight: '1.8',
                }:{
                  fontFamily: 'BozonRegular',
                  fontSize: '14px',
                  marginLeft: '60px',
                  textAlign: 'left',
                  lineHeight: '1.8',
                }}
              >
                Soy Ana, Licenciada en Relaciones Internacionales. Hace diez años, cuando llegué a Chile, mi vida cambió radicalmente. Me sumergí por completo en mi pasión de siempre, la gastronomía. Comencé a estudiar la carrera y posteriormente, me especialicé en pastelería que es lo que más amo hacer. <br></br>
                Durante estos años, he adoptado técnicas y tendencias que garantizan que mi trabajo sea de la más alta calidad. Por eso, quiero contarles que en Annete utilizamos solo materia prima premium y natural. <br></br>
                El concepto de Annete es que un pastel no solo debe verse bien, sino también saber maravilloso. Cada bocado debe ser una combinación única de texturas y sabores. Para lograr esto, trabajo de manera artesanal y con mucho amor, asegurando que cada uno de nuestros productos sea una experiencia única.
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
                  Soy Ana, Licenciada en Relaciones Internacionales. Hace diez años, cuando llegué a Chile, mi vida cambió radicalmente. Me sumergí por completo en mi pasión de siempre, la gastronomía. Comencé a estudiar la carrera y posteriormente, me especialicé en pastelería que es lo que más amo hacer.
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
                  Durante estos años, he adoptado técnicas y tendencias que garantizan que mi trabajo sea de la más alta calidad. Por eso, quiero contarles que en Annete utilizamos solo materia prima premium y natural. <br></br>
                  El concepto de Annete es que un pastel no solo debe verse bien, sino también saber maravilloso. Cada bocado debe ser una combinación única de texturas y sabores. Para lograr esto, trabajo de manera artesanal y con mucho amor, asegurando que cada uno de nuestros productos sea una experiencia única.
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
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default AboutMe;
