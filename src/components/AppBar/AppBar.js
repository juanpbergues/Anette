import React from 'react';

import PropTypes from 'prop-types';
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material';
import {HashLink as Link} from 'react-router-hash-link';
import {useNavigationStore} from '../../stores/useNavigationStore';

import * as Routes from '../../constants/routes';

import Logo from '../../assets/annete-logo-with-letters-only.png';

import './appbar.scss';
import MobileSideOptions from './MobileSideOptions/MobileSideOptions';

const CustomAppBar = ({matches, fullScreen}) => {
  const getDefaultClassName = () => {
    if (matches) {
      return 'appbar-mobile';
    }
    if (fullScreen) {
      return 'appbar-full-screen';
    }
    return 'appbar';
  };
  const defaultClassName = getDefaultClassName();

  const primary = useNavigationStore((state) => state.primary);
  const setPrimary = useNavigationStore((state) => state.setPrimary);
  const setSecondary = useNavigationStore((state) => state.setSecondary);

  const getLogoToRender = () => {
    if (matches) {
      return (
        <img src={Logo} style={{
          width: 160,
          height: '100%',
          marginLeft: '10px',
        }} />
      );
    } else if (fullScreen) {
      return (
        <img src={Logo} style={{
          width: 200,
          height: '100%',
        }} />
      );
    } else {
      return (
        <img src={Logo} style={{
          width: 180,
          height: '100%',
        }} />
      );
    };
  };

  return (
    <section className="appbar-section">
      <AppBar
        position="static"
        color="transparent"
        className={defaultClassName}
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
              <Link
                onClick={() => {
                  setPrimary('');
                  setSecondary('');
                }}
                to={Routes.HOME}
              >
                {getLogoToRender()}
              </Link>
            </Grid>
            {!matches && (
              <Grid item>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  href='/#patisserie'
                  className="button  with-margin"
                  sx={
                    primary === 'patisserie' && {
                      color: '#98C8BB',
                      fontWeight: 'bold',
                    }}
                  onClick={() => {
                    setPrimary('patisserie');
                  }}
                >
                  PÂTISSERIE
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  href='/#nosotros'
                  className="button with-margin"
                  sx={
                    primary === 'nosotros' && {
                      color: '#98C8BB',
                      fontWeight: 'bold',
                    }}
                  onClick={() => {
                    setPrimary('nosotros');
                    setSecondary('');
                  }}
                >
                  SOBRE MI
                </Button>
                <Button
                  variant="text"
                  size="large"
                  color="secondary"
                  href='/#contacto'
                  className="button"
                  sx={
                    primary === 'contacto' && {
                      color: '#98C8BB',
                      fontWeight: 'bold',
                    }}
                  onClick={() => {
                    setPrimary('contacto');
                    setSecondary('');
                  }}
                >
                  CONTACTO
                </Button>
              </Grid>
            )}
            {matches && (
              <MobileSideOptions />
            )}
          </Grid>
        </Toolbar>
      </AppBar >
    </section>
  );
};

CustomAppBar.propTypes = {
  matches: PropTypes.bool,
  fullScreen: PropTypes.bool,
};


export default CustomAppBar;
