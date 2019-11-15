import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function UncontrolledTextField(props) {
  const classes = useStyles();
  
    return (
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField + ' ' + props.class ? props.class : ''}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
    );
  }

// export default Inputfiled;