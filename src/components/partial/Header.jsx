// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Material
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';

// Material Icons
import MenuIcon from '@material-ui/icons/Menu';

// Material Styles
import { makeStyles } from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            className={classes.title}
            color='inherit'
            component={Link}
            to='/'
          >
            React Redux Login
          </Typography>
          <Button
            component={Link}
            to='/login'
            color='inherit'
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
