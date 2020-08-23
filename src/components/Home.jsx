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
      backgroundColor: 'lightGreen',
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

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant='h1' className={classes.paper}>
        Hello User Registered
      </Typography>
    </Box>
  );
};

export default Home;
