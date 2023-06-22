import React, {useState} from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Avatar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Collapse,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import PropTypes from 'prop-types';
import * as Routes from '../../constants/routes';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from '../../assets/anette-logo-with-letters-only.png';
import './appbar.scss';

const CustomAppBar = ({matches}) => {
  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };
  const [currentOption, setCurrentOption] = useState({
    primary: null,
    secondary: null,
  });
  const [open, setOpen] = useState(false);
  const [openPatisserie, setOpenPatisserie] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
                currentOption.primary === 'patisserie' && {
                  color: '#98C8BB',
                  fontWeight: '700',
                }}
              onClick={() => {
                setCurrentOption({primary: 'patisserie'});
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
              onClick={handleOpen}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='right'
              open={open}
              PaperProps={{
                sx: {
                  width: '100%',
                  backgroundColor: '#F2E0E5',
                },
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
                sx={{
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  paddingTop: '40px',
                }}>
                <IconButton
                  id="menu-button"
                  onClick={handleClose}
                  color="secondary"
                  size="large"
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
                <List sx={{paddingTop: '50px'}}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setOpenPatisserie(!openPatisserie);
                        setCurrentOption({
                          ...currentOption,
                          primary: 'patisserie',
                        });
                      }}
                      sx={{justifyContent: 'flex-end'}}
                    >
                      <Typography
                        align="right"
                        variant="h5"
                        color="secondary"
                        sx={
                          (
                            openPatisserie ||
                            currentOption.primary === 'patisserie'
                          ) && {
                            color: '#FAFAFA',
                            fontWeight: '700',
                          }}
                      >
                        PÂTISSERIE
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={openPatisserie}>
                    <List component="div" disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setCurrentOption({
                            primary: 'patisserie',
                            secondary: 'tortas',
                          });
                          handleClick(Routes.TORTAS);
                          handleClose();
                        }}
                        sx={{justifyContent: 'flex-end'}}
                      >
                        <Typography
                          align="right"
                          variant="h6"
                          color="secondary"
                          sx={
                            currentOption.secondary === 'tortas' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          <em>TORTAS</em>
                        </Typography>
                      </ListItemButton>
                      <ListItemButton
                        onClick={() => {
                          setCurrentOption({
                            primary: 'patisserie',
                            secondary: 'tartas-clasicas',
                          });
                          handleClick(Routes.TARTAS_CLASICAS);
                          handleClose();
                        }}
                        sx={{justifyContent: 'flex-end'}}
                      >
                        <Typography
                          align="right"
                          variant="h6"
                          color="secondary"
                          sx={
                            currentOption.secondary === 'tartas-clasicas' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          <em>TARTAS CLASICAS</em>
                        </Typography>
                      </ListItemButton>
                      <ListItemButton
                        onClick={() => {
                          setCurrentOption({
                            primary: 'patisserie',
                            secondary: 'macarons',
                          });
                          handleClick(Routes.MACARONS);
                          handleClose();
                        }}
                        sx={{justifyContent: 'flex-end'}}
                      >
                        <Typography
                          align="right"
                          variant="h6"
                          color="secondary"
                          sx={
                            currentOption.secondary === 'macarons' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          <em>MACARONS</em>
                        </Typography>
                      </ListItemButton>
                      <ListItemButton
                        sx={{justifyContent: 'flex-end'}}
                        onClick={() => {
                          setCurrentOption({
                            primary: 'patisserie',
                            secondary: 'cookies',
                          });
                          handleClick(Routes.COOKIES);
                          handleClose();
                        }}
                      >
                        <Typography
                          align="right"
                          variant="h6"
                          color="secondary"
                          sx={
                            currentOption.secondary === 'cookies' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          <em>COOKIES</em>
                        </Typography>
                      </ListItemButton>
                      <ListItemButton
                        onClick={() => {
                          setCurrentOption({
                            primary: 'patisserie',
                            secondary: 'travel-cakes',
                          });
                          handleClick(Routes.TRAVEL_CAKES);
                          handleClose();
                        }}
                        sx={{justifyContent: 'flex-end'}}
                      >
                        <Typography
                          align="right"
                          variant="h6"
                          color="secondary"
                          sx={
                            currentOption.secondary === 'travel-cakes' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          <em>TRAVEL CAKES</em>
                        </Typography>
                      </ListItemButton>
                      <ListItemButton
                        onClick={() => {
                          setCurrentOption({
                            primary: 'patisserie',
                            secondary: 'tartas-vitrina',
                          });
                          handleClick(Routes.TARTAS_VITRINA);
                          handleClose();
                        }}
                        sx={{
                          justifyContent: 'flex-end',
                          marginBottom: '20px',
                        }}
                      >
                        <Typography
                          align="right"
                          variant="h6"
                          color="secondary"
                          sx={
                            currentOption.secondary === 'tartas-vitrina' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          <em>TARTAS DE VITRINA</em>
                        </Typography>
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItem disablePadding sx={{paddingTop: '20px'}}>
                    <ListItemButton
                      sx={{justifyContent: 'flex-end'}}
                      onClick={
                        () => {
                          setCurrentOption({
                            primary: 'nosotros',
                            secondary: null,
                          });
                          handleClose();
                        }
                      }
                    >
                      <Link
                        smooth
                        to={`${Routes.HOME}#about-me`}
                        style={{textDecoration: 'none'}}
                      >

                        <Typography
                          align="right"
                          variant="h5"
                          color="secondary"
                          sx={
                            currentOption.primary === 'nosotros' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          NOSOTROS
                        </Typography>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{paddingTop: '20px'}}>
                    <ListItemButton
                      sx={{justifyContent: 'flex-end'}}
                      onClick={() => {
                        setCurrentOption({
                          primary: 'contacto',
                          secondary: null,
                        });
                        handleClose();
                      }}
                    >
                      <Link
                        smooth
                        to={`${Routes.HOME}#contacto`}
                        style={{textDecoration: 'none'}}
                      >
                        <Typography
                          align="right"
                          variant="h5"
                          color="secondary"
                          sx={
                            currentOption.primary === 'contacto' && {
                              color: '#FAFAFA',
                              fontWeight: '700',
                            }}
                        >
                          CONTACTO
                        </Typography>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
            </Drawer>
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
