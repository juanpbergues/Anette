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
import Image from '../../assets/annete-logo-with-letters-only.png';
import './appbar.scss';
import {useNavigationStore} from '../../stores/useNavigationStore';

const CustomAppBar = ({matches}) => {
  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };

  const primary = useNavigationStore((state) => state.primary);
  const secondary = useNavigationStore((state) => state.secondary);
  const setPrimary = useNavigationStore((state) => state.setPrimary);
  const setSecondary = useNavigationStore((state) => state.setSecondary);

  const [open, setOpen] = useState(false);
  const [openPatisserie, setOpenPatisserie] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <section className="appbar-section">
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
              <Link
                onClick={() => {
                  setPrimary('');
                  setSecondary('');
                }}
                to={Routes.HOME}
              >
                <Avatar
                  src={Image}
                  variant="square"
                  sx={!matches ? {
                    width: 200,
                    height: '100%',
                  } : {
                    width: 180,
                    height: '100%',
                  }}
                />
              </Link>
            </Grid>
            <Grid item sx={matches && {display: 'none'}}>
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
                onClick={() => setPrimary('nosotros')}
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
                  primary === 'contacto' && {
                    color: '#98C8BB',
                    fontWeight: 'bold',
                  }}
                onClick={() => setPrimary('contacto')}
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
                          setPrimary('patisserie');
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
                              primary === 'patisserie'
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
                            setPrimary('patisserie');
                            setSecondary('tortas');
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
                              secondary === 'tortas' && {
                                color: '#FAFAFA',
                                fontWeight: '700',
                              }}
                          >
                            <em>TORTAS</em>
                          </Typography>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() => {
                            setPrimary('patisserie');
                            setSecondary('tartas-clasicas');
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
                              secondary === 'tartas-clasicas' && {
                                color: '#FAFAFA',
                                fontWeight: '700',
                              }}
                          >
                            <em>TARTAS CLASICAS</em>
                          </Typography>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() => {
                            setPrimary('patisserie');
                            setSecondary('macarons');
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
                              secondary === 'macarons' && {
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
                            setPrimary('patisserie');
                            setSecondary('cookies');
                            handleClick(Routes.COOKIES);
                            handleClose();
                          }}
                        >
                          <Typography
                            align="right"
                            variant="h6"
                            color="secondary"
                            sx={
                              secondary === 'cookies' && {
                                color: '#FAFAFA',
                                fontWeight: '700',
                              }}
                          >
                            <em>COOKIES</em>
                          </Typography>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() => {
                            setPrimary('patisserie');
                            setSecondary('travel-cakes');
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
                              secondary === 'travel-cakes' && {
                                color: '#FAFAFA',
                                fontWeight: '700',
                              }}
                          >
                            <em>TRAVEL CAKES</em>
                          </Typography>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() => {
                            setPrimary('patisserie');
                            setSecondary('tartas-vitrina');
                            handleClick(Routes.TORTAS_VITRINA);
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
                              secondary === 'tartas-vitrina' && {
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
                            setPrimary('nosotros');
                            setSecondary('');
                            handleClose();
                          }
                        }
                      >
                        <Link
                          smooth
                          to={`${Routes.HOME}#nosotros`}
                          style={{textDecoration: 'none'}}
                        >
                          <Typography
                            align="right"
                            variant="h5"
                            color="secondary"
                            sx={
                              primary === 'nosotros' && {
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
                          setPrimary('contacto');
                          setSecondary('');
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
                              primary === 'contacto' && {
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
    </section>
  );
};

CustomAppBar.propTypes = {
  matches: PropTypes.bool,
};


export default CustomAppBar;
