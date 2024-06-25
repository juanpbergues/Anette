import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  Typography,
} from '@mui/material';
import './test-card-second.scss';

// Verde #98C8BB
// Rosa #F2E0E5
// Azul #708DC7

const TestCardSecond = ({title, image, to}) => {
  return (
    <div style={{
      border: 'solid 2px #708DC7',
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
          // style={{
          //   border: 'solid 1px #708DC7',
          // }}
          />
        </CardActionArea>
      </Card>
      <div style={{marginTop: '20px'}}>
        <hr
          size="8px"
          color="#708DC7"
          width="40%"
          style={{marginBottom: '20px', marginTop: '30px'}}
        />
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
      </div>
    </div>
  );
};

TestCardSecond.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default TestCardSecond;
