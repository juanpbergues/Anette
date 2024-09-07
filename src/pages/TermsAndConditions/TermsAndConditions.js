/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';

import './terms-and-conditions.scss';

const TermsAndConditions = ({matches}) => {
  const defaultClassName = 'terms-and-conditions';
  return (
    <div className={defaultClassName}>
      <Typography
        color="secondary"
        variant="h5"
        sx={{
          marginTop: '20px',
          marginBottom: '30px',
          fontFamily: 'Chequersdemo',
          fontSize: '26px',
        }}
      >
          TERMINOS Y CONDICIONES
      </Typography>
      <Typography
        align="left"
        color="secondary"
        sx={{
          fontFamily: 'BozonBold',
          fontSize: '16px',
          marginBottom: '8px',
        }}
      >
        INTRODUCCIÓN
      </Typography>
      <Typography
        align="left"
        color="secondary"
        sx={{
          fontFamily: 'BozonRegular',
          fontSize: '16px',
          marginBottom: '16px',
        }}
      >
        Bienvenido al sitio web de ANNETE LA FOLIE DU CHOCOLAT. Por favor, lea las siguientes reglas básicas que rigen el uso de ANNETE LA FOLIE DU CHOCOLAT ONLINE (en adelante, las &quot;Reglas&quot;).
      </Typography>
      <Typography
        align="left"
        color="secondary"
        sx={{
          fontFamily: 'BozonBold',
          fontSize: '16px',
          marginBottom: '8px',
        }}
      >
        USO DEL WEBSITE
      </Typography>
      <Typography
        align="left"
        color="secondary"
        sx={{
          fontFamily: 'BozonRegular',
          fontSize: '16px',
          marginBottom: '16px',
        }}
      >
        Mediante el uso del Website el Usuario acepta las Reglas, y declara bajo juramento tener 18 años de edad o más. Si usted es menor de 18 años de edad deberá abstenerse de usar el Website. Los padres, tutores o responsables de los menores de 18 años que utilicen el Website son plena y exclusivamente responsables por el uso del Website por parte de éstos.
      </Typography>
      <Typography
        align="left"
        color="secondary"
        sx={{
          fontFamily: 'BozonBold',
          fontSize: '16px',
          marginBottom: '8px',
        }}
      >
        DERECHOS DE MARCA, PUBLICIDAD Y PROPIEDAD INTELECTUAL
      </Typography>
      <Typography
        align="left"
        color="secondary"
        sx={{
          fontFamily: 'BozonRegular',
          fontSize: '16px',
          marginBottom: '16px',
        }}
      >
        Todos los elementos, incluidas las imágenes, textos, ilustraciones, íconos, logo e isotipos, fotografías, programas, animaciones, cualquier música, melodía, video clip y cualquier otro elemento que forma parte del Website sólo tiene como destino la comercialización de productos por parte de ANNETE LA FOLIE DU CHOCOLAT y se encuentra prohibida cualquier reproducción, modificación o distribución de los mismos. Todos los comentarios, sugerencias o ideas suministradas por el Usuario serán propiedad de ANNETE LA FOLIE DU CHOCOLAT.
      </Typography>
    </div>
  );
};

TermsAndConditions.propTypes = {
  matches: PropTypes.string,
};

export default TermsAndConditions;
