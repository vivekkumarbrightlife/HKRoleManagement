import React, { Component } from 'react';
import  '../common.css';

class Inputfiled extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
  handleChange = (e) => {
    this.props.getSystemId(e.target.value)
  }
render() {
    return ( 
        <input type="text" className="input-field" 
          placeholder={this.props.placeholder ? this.props.placeholder : ""} 
          name={this.props.name ? this.props.name : ''}
          value={this.props.name}
          onChange={this.handleChange}
          />
    );
  }
}
export default Inputfiled;