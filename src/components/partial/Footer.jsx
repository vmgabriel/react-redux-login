
// Libraries
import React from 'react';

// Material
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

// Material Styles
import {
  makeStyles,
} from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
  },
  paper: {
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      component='div'
      className={classes.root}
    >
      <Grid container spacing={3} className={classes.paper}>
        <Typography
          variant='h6'
        >
          Copyright 2020 - Gabriel Vargas Monroy
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
