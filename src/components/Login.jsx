// Libraries
import React from 'react';
import { useSnackbar } from 'notistack';

// Components
import DynamicForm from './generics/DynamicForm';

// Validation
import validate from '../utils/validation';

const changeValueById = ([field, ...restField]) => (id) => (value) => {
  if (!field) return [];
  const uField = (field.id !== id) ? field : { ...field, value };
  return [uField].concat(changeValueById(restField)(id)(value));
};

const getValues = ([field, ...restField]) => (values = {}) => {
  if (!field) return values;
  const value = (field.type === 'button') ? values : { ...values, [field.name]: field.value };
  return {
    ...value,
    ...getValues(restField)(value),
  };
};

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

const Login = () => {
  const [form, setForm] = React.useState(data);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const sendAlert = (message) => (variant = 'default') => {
    enqueueSnackbar(message, { variant });
  };

  const handleOnChange = (event) => {
    setForm({
      ...form,
      fields: changeValueById(form.fields)(event.target.id)(event.target.value),
    });
  };

  const handleClickSubmit = () => {
    console.log('click');
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
      console.log('validado correctamente');
      sendAlert('Validation Correctly')('success');
    }
  };

  return (
    <DynamicForm
      form={form}
      onChange={handleOnChange}
      onSubmit={handleClickSubmit}
    />
  );
};

export default Login;
