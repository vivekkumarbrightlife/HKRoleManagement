import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


class Inputfiled extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
        <TextField
          id="outlined-password-input"
          label={props.label ? props.label:'Input'}
          className={classes.textField + ' ' + props.class ? props.class : ''}
          // type="password"
          // autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
    );
  }
}
export default Inputfiled;