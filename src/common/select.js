import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/styles';



const useStyles = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  });

//   const styles = theme => ({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });
  
  class SimpleSelect extends Component {
    constructor() {
        super();
        this.state = {
          age: 0
        }
      }
  
    handleChange = event => {
      this.setState({
          age: event.target.value
        });
    };
  

// export default function UncontrolledTextField(props) {
//   const classes = useStyles();
render () {
    const { classes } = this.props;

    return (
        
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          {this.props.label ? this.props.label:'select'}        
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.age}
          onChange={this.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(useStyles)(SimpleSelect);