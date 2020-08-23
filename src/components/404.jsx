// Libraries
import React from 'react';

// Material
import {
  Box,
  Typography,
} from '@material-ui/core';

// Material Styles
import {
  makeStyles,
} from '@material-ui/core/styles';

//Styles
const useStyles = makeStyles((theme) => {
  return ({
    root: {
      backgroundColor: 'lightRed',
      color: 'black',
      width: '100%',
      height: '100vh',
    },
    paper: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      alignContent: 'center',
    },
  });
});

const Route404 = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant='h1' className={classes.paper}>
        404
        <Typography variant='h2' className={classes.paper}>
          Not Found
        </Typography>
      </Typography>
    </Box>
  );
};

export default Route404;
