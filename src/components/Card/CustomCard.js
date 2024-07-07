import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  Typography,
} from '@mui/material';
import './custom-card.scss';
import {useNavigate} from 'react-router-dom';

const CustomCard = ({title, id, to}) => {
  const defaultClassName = 'custom-card';
  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };
  return (
    <div className={defaultClassName}>
      <Card sx={{
        borderRadius: 0,
        boxShadow: 0,
      }}>
        <CardActionArea onClick={() => handleClick(to)}>
          <div
            className={`${defaultClassName}__media-${id}`}
          />
          <div className={`${defaultClassName}__title-container`}>
            <Typography
              color="secondary"
              variant="h5"
              sx={{
                fontFamily: 'Chequersdemo',
                fontSize: '22px',
                lineHeight: '25px',
              }}
            >
              {title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

CustomCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default CustomCard;
