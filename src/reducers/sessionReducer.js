const INITIAL_STATE = {
  session: {},
  error: false,
  errorMessage: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'load_session':
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        session: action.payload,
      };

    case 'loading_login':
      return {
        ...state,
        loading: !state.loading,
      };

    case 'error_login':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'Error with Credentials',
      };

    case 'clear_error_login':
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
      };

    default: return state;
  }
};
