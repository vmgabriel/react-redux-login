// Libraries
import React from 'react';
import { useSnackbar } from 'notistack';

// Redux
import { connect } from 'react-redux';

// Components
import DynamicForm from './generics/DynamicForm';

// Validation
import validate from '../utils/validation';

// Utils
import { changeValueById, getValues, clearValues } from '../utils/dynamic-forms';
// import { verifyCredential } from '../utils/middlewares/session';

// Redux Actions
import * as sessionActions from '../actions/sessionAction';

const data = {
  title: {
    value: 'Login',
    variant: 'h5',
  },
  fields: [
    {
      id: 'txt_username',
      name: 'username',
      label: 'Username',
      required: true,
      isError: false,
      messageError: '',
      type: 'text',
      autoFocus: true,
      min: true,
      max: true,
      value: '',
    },
    {
      id: 'txt_password',
      name: 'password',
      label: 'Password',
      required: true,
      isError: false,
      min: true,
      max: true,
      messageError: '',
      type: 'password',
      autoFocus: false,
      value: '',
    },
    {
      id: 'btn_submit',
      name: 'submit',
      label: 'Login',
      type: 'button',
      variant: 'contained',
      color: 'primary',
    },
  ],
};

const sendToHome = (history) => history.push('/auth');

const Login = (props) => {
  console.log('props - ', props);
  const { loading, error, errorMessage, session } = props;
  const [form, setForm] = React.useState(data);
  const { enqueueSnackbar } = useSnackbar();

  const sendAlert = (message) => (variant = 'default') => enqueueSnackbar(message, { variant });

  React.useEffect((data) => {
    if ('_id' in session) {
      sendAlert('credentials valids')('success');
      setForm({
        ...form,
        fields: clearValues(form.fields),
      });
      sendToHome(props.history);
    }
    if (error) props.clearErrors();
  }, [session, error]);

  const handleOnChange = (event) => {
    setForm({
      ...form,
      fields: changeValueById(form.fields)(event.target.id)(event.target.value),
    });
  };

  const handleClickSubmit = async () => {
    const values = getValues(form.fields)();
    const validation = form.fields.map(validate(values));
    const isError = validation.reduce((acc, curr) => curr.isError || acc, false);
    if (isError) {
      setForm({
        ...form,
        fields: validation,
      });
      sendAlert('Data not Valid')('error');
    } else {
      props.loadSession(values);
    }
  };

  return (
    <DynamicForm
      form={form}
      error={error}
      errorMessage={errorMessage}
      loading={loading}
      onChange={handleOnChange}
      onSubmit={handleClickSubmit}
    />
  );
};

const mapStatesToProps = (reducers) => {
  return reducers.sessionReducer;
};

/* const mapActionsToProps = () => ({
 *   loadSession,
 * }); */

export default connect(mapStatesToProps, sessionActions)(Login);
