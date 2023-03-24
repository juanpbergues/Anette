import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const CustomCard = ({title, image}) => {
  return (
    <Card sx={{borderRadius: 0, border: 'solid #708DC7', boxShadow: 0}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="100"
          image={image}
          alt="macarons"
        />
        <CardContent>
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
};

export default CustomCard;
