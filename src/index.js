// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// Styles Base
import './assets/styles/global.scss';

// Reducers
import reducers from './reducers';

// Components
import App from './App';

// Constants
const store = createStore(
  reducers, // Todos los reducers,
  {}, // Estado Inicial
  applyMiddleware(reduxThunk),
);

const Components = () => (<Provider store={store}><App /></Provider>);

ReactDOM.render(Components(), document.getElementById('root'));
