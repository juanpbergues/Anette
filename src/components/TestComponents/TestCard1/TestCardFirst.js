import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  Typography,
} from '@mui/material';
import './test-card-first.scss';
import CustomButton from '../../CustomButton/CustomButton';

// Verde #98C8BB
// Rosa #F2E0E5
// Azul #708DC7

const TestCardFirst = ({title, image, to}) => {
  return (
    <div style={{
      // border: 'solid 1px #708DC7',
      width: '320px',
      height: '460px',
      margin: '100px',
    }}>
      <Card sx={{
        borderRadius: 0,
        boxShadow: 0,
      }}>
        <CardActionArea onClick={() => handleClick(to)}>
          <div
            className='card-media'
            style={{
              // border: 'solid 1px #708DC7',
            }}
          />
        </CardActionArea>
      </Card>
      <div style={{marginTop: '20px'}}>
        <Typography
          color="secondary"
          gutterBottom
          variant="h5"
          component="div"
          className="card-title"
          sx={{marginBottom: '20px'}}
        >
          TARTAS CLASICAS
        </Typography>
        <CustomButton
          text="VER MAS"
          color="secondary"
          hoverColor="#98C8BB"
          size="small"
          href="https://wa.me/56954531193?text=Hola%20Ana!%20Quisiera%20reservar%20unos%20Macarons!"
        />
      </div>
    </div>
  );
};

TestCardFirst.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default TestCardFirst;
