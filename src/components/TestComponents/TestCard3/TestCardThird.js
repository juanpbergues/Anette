import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  Typography,
} from '@mui/material';
import './test-card-third.scss';

const TestCardThird = ({title, image, to}) => {
  return (
    <div style={{
      border: 'solid 1px #708DC7',
      width: '320px',
      height: '400px',
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

TestCardThird.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default TestCardThird;
