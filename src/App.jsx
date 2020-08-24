// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

// Styles
import {
  ThemeProvider,
} from '@material-ui/core/styles';

// Components
import theme from './Theme';
import Header from './components/partial/Header';
import Footer from './components/partial/Footer';

import Main from './components/Main';
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import Home from './components/Home';
import Route404 from './components/404';

// Constants
const maxSnack = 3;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={maxSnack}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/hello' component={HelloWorld} />
            <Route exact path='/auth' component={Home} />
            <Route exact path='/login' component={Login} />

            <Route exact path='/*' component={Route404} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
