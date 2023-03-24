import React from 'react';
import {Grid, AppBar, Toolbar, Button, Avatar} from '@mui/material';
import Image from '../../assets/anette-logo-with-letters-only.png';
import './appbar.scss';

const CustomAppBar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      className="appbar"
      sx={{
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Avatar
              src={Image}
              variant="square"
              sx={{
                width: 200,
                height: '100%',
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="text"
              color="secondary"
              size="large"
              sx={{
                marginRight: '30px',
              }}
            >
              PÂTISSERIE
            </Button>
            <Button
              variant="text"
              color="secondary"
              size="large"
              sx={{
                marginRight: '30px',
              }}
            >
              NOSOTROS
            </Button>
            <Button
              variant="text"
              color="secondary"
              size="large"
              sx={{
                marginRight: '30px',
              }}
            >
              NEWSLETTER
            </Button>
            <Button
              variant="text"
              color="secondary"
              size="large"
            >
              CONTACTO
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
