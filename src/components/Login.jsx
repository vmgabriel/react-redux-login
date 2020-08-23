// Libraries
import React from 'react';

// Material
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

// Material Styles
import {
  makeStyles,
} from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '40vh',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    border: '1px solid',
    borderColor: theme.palette.primary.light,
    boxShadow: `5px 5px ${theme.palette.primary.light}`,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    padding: theme.spacing(4),
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  boxButtom: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.root}>
      <Grid container className={classes.content}>
        <Typography variant='h5'>
          Login
        </Typography>
        <TextField
          type='text'
          id='username'
          label='username'
          className={classes.paper}
        />
        <TextField
          type='password'
          id='password'
          label='password'
          className={classes.paper}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.boxButtom}
        >
          Submit
        </Button>
      </Grid>
    </Container>
  );
};

export default Login;
