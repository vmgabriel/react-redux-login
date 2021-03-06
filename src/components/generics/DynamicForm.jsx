// Libraries
import React from 'react';
import { useSnackbar } from 'notistack';

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

// Components
import Spinner from './Spinner';

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '40vh',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    border: '1px solid',
    borderColor: theme.palette.primary.light,
    boxShadow: `5px 5px ${theme.palette.primary.light}`,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
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

const getDataForm = (theme) => (submit) => (onChange) => (field) => {
  let children;
  switch (field.type) {
    case 'button':
      children = (
        <Button
          variant={field.variant}
          color={field.color}
          className={field.class || theme.boxButtom}
          onClick={submit}
        >
          { field.label }
        </Button>
      );
      break;
    default:
      children = (
        <TextField
          type={field.type}
          required={field.required}
          autoFocus={field.autoFocus}
          // defaultValue={field.value || ''}
          id={field.id}
          name={field.name || 'lbl'}
          label={field.label || 'lbl'}
          value={field.value || ''}
          onChange={onChange}
          error={field.isError}
          helperText={field.messageError}
          className={field.class || theme.paper}
        />
      );
      break;
  }
  return (
    <Grid item xs={12} key={field.id}>
      {children}
    </Grid>
  );
};

const cycleForm = (classes) => ({ form, onSubmit, onChange, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  const generateFields = getDataForm(classes)(onSubmit)(onChange);
  console.log('form - ', form);
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography variant={form.title.variant || 'h5'}>
          {form.title.value || 'Title'}
        </Typography>
      </Grid>

      {form.fields.map(generateFields)}
    </React.Fragment>
  );
};

const DynamicForm = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { error, errorMessage } = props;

  React.useEffect(() => {
    if (error) enqueueSnackbar(errorMessage, { variant: 'error' });
  }, [error]);

  return (
    <Container maxWidth='sm' className={classes.root}>
      <Grid container className={classes.content}>
        { cycleForm(classes)(props) }
      </Grid>
    </Container>
  );
};

export default DynamicForm;
