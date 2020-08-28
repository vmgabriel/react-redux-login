// Libraries
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';

const ErrorMessage = ({ message }) => {
  return (
    <Typography variant='h2' gutterBottom>
      { message }
    </Typography>
  );
};

export default ErrorMessage;
