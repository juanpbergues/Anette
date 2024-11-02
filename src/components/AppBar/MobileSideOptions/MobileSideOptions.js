import React, {useState} from 'react';

import {
  Grid,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {HashLink as Link} from 'react-router-hash-link';
import {useNavigate} from 'react-router-dom';

import {useNavigationStore} from '../../../stores/useNavigationStore';

import * as Routes from '../../../constants/routes';

import '../appbar.scss';

const MobileSideOptions = () => {
  const [open, setOpen] = useState(false);
  const [openPatisserie, setOpenPatisserie] = useState(false);

  const secondary = useNavigationStore((state) => state.secondary);
  const primary = useNavigationStore((state) => state.primary);
  const setPrimary = useNavigationStore((state) => state.setPrimary);
  const setSecondary = useNavigationStore((state) => state.setSecondary);

  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Grid item>
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
                  color="secondary"
                  sx={
                              (
                                openPatisserie &&
                                primary === 'patisserie'
                              ) ? {
                                fontFamily: 'BozonBold',
                                fontSize: '30px',
                                color: '#FAFAFA',
                                lineHeight: '36px',
                              } : {
                                fontFamily: 'BozonRegular',
                                fontSize: '30px',
                                lineHeight: '36px',
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
                                secondary === 'tortas' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '24px',
                                  color: '#FAFAFA',

                                  lineHeight: '30px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '24px',
                                  lineHeight: '30px',
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
                                secondary === 'tartas-clasicas' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '24px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '30px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '24px',
                                  lineHeight: '30px',
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
                                secondary === 'macarons' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '24px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '30px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '24px',
                                  lineHeight: '30px',
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
                                secondary === 'cookies' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '24px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '30px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '24px',
                                  lineHeight: '30px',
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
                                secondary === 'travel-cakes' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '24px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '30px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '24px',
                                  lineHeight: '30px',
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
                                secondary === 'tartas-vitrina' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '24px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '30px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '24px',
                                  lineHeight: '30px',
                                }}
                  >
                    <em>TORTAS MODERNAS</em>
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
                                primary === 'nosotros' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '30px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '36px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '30px',
                                  lineHeight: '36px',
                                }}
                  >
                              SOBRE MI
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
                                primary === 'contacto' ? {
                                  fontFamily: 'BozonBold',
                                  fontSize: '30px',
                                  color: '#FAFAFA',
                                  fontWeight: '700',
                                  lineHeight: '36px',
                                } : {
                                  fontFamily: 'BozonRegular',
                                  fontSize: '30px',
                                  lineHeight: '36px',
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
  );
};

MobileSideOptions.propTypes = {};


export default MobileSideOptions;
