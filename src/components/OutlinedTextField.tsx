import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const OutlinedTextField: React.FC<Omit<TextFieldProps, 'variant'>> = (
   props
) => {
   return <TextField variant="filled" {...props} />;
};

export default OutlinedTextField;
