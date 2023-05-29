import React, {useState} from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import PropTypes from 'prop-types';
import * as Routes from '../../constants/routes';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../../assets/anette-logo-with-letters-only.png';
import './appbar.scss';

const CustomAppBar = ({matches}) => {
  const [currentOption, setCurrentOption] = useState(null);
  const [open, setOpen] = useState(null);
  const isOpen = Boolean(open);

  const handleClickMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

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
          <a href={Routes.HOME}>
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
          </a>
          <Grid item sx={matches && {display: 'none'}}>
            <Button
              variant="text"
              color="secondary"
              size="large"
              href='/#patisserie'
              className="button  with-margin"
              sx={
                currentOption === 'patisserie' && {
                  color: '#98C8BB',
                  fontWeight: '700',
                }}
              onClick={() => {
                setCurrentOption('patisserie');
              }}
            >
              PÂTISSERIE
            </Button>
            <Button
              variant="text"
              color="secondary"
              size="large"
              href='/#about-me'
              className="button with-margin"
              sx={
                currentOption === 'nosotros' && {
                  color: '#98C8BB',
                  fontWeight: '700',
                }}
              onClick={() => setCurrentOption('nosotros')}
            >
              NOSOTROS
            </Button>
            <Button
              variant="text"
              size="large"
              color="secondary"
              href='/#contacto'
              className="button"
              sx={
                currentOption === 'contacto' && {
                  color: '#98C8BB',
                  fontWeight: '700',
                }}
              onClick={() => setCurrentOption('contacto')}
            >
              CONTACTO
            </Button>
          </Grid>
          <Grid item sx={!matches && {display: 'none'}}>
            <IconButton
              id="menu-button"
              onClick={handleClickMenu}
              aria-controls={isOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isOpen ? 'true' : undefined}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              open={isOpen}
              onClose={handleClose}
              anchorEl={open}
            >
              <MenuItem>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  href='/#patisserie'
                  onClick={
                    () => {
                      setCurrentOption('patisserie');
                      handleClose();
                    }
                  }
                >
                  PÂTISSERIE
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  href='/#about-me'
                  onClick={() => {
                    setCurrentOption('nosotros');
                    handleClose();
                  }}
                >
                  NOSOTROS
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  href='/#contacto'
                  onClick={() => {
                    setCurrentOption('contacto');
                    handleClose();
                  }}
                >
                  CONTACTO
                </Button>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >
  );
};

CustomAppBar.propTypes = {
  matches: PropTypes.bool,
};


export default CustomAppBar;
