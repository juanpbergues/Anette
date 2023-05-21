import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import './custom-card.scss';

const CustomCard = ({title, image, to}) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        border: 'solid #708DC7',
        boxShadow: 0,
        width: '400px',
        height: '525px',
      }}
      className="custom-card"
    >
      <CardActionArea href={to}>
        <CardMedia
          component="img"
          height="400"
          width="400"
          image={image}
          alt="macarons"
        />
        <CardContent>
          <hr
            size="8px"
            color="#708DC7"
            width="40%"
            style={{marginBottom: '20px', marginTop: '30px'}}
            className="card-separator"
          />
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="div"
            className="card-title"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CustomCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default CustomCard;