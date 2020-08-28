/**
 * @fileOverview
 * @name sessionAction.js
 * @author vmgabriel
 * @license gpl-3
 */

// Libraries
import axios from 'axios';

// const getUrl = (host) => (port) => ((!port || port === '') ? host : `${host}:${port}`);

export const loadSession = (dataLogin) => async (dispatch) => {
  try {
    dispatch({
      type: 'loading_login',
    });
    const options = {
      method: 'post',
      url: 'http://localhost:7200/api/v0/auth',
      data: dataLogin,
      withCredentails: true,
    };

    const response = await axios(options);
    const { status, data: { code, message, data } } = response;
    console.log('data -', response);
    if (status === 401) {
      console.log('Error Load Session - ', response);
      dispatch({
        type: 'error_login',
      });
    }
    if (code === 200 && message === 'Data Correctly') {
      console.log('data - ', data);
      dispatch({
        type: 'load_session',
        payload: data,
      });
    }
  } catch (err) {
    console.log('Error Load Session - ', err);
    dispatch({
      type: 'error_login',
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: 'clear_error_login',
  });
};
