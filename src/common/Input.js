import React, { Component } from 'react';
import  '../common.css';

class Inputfiled extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return ( 
        <input type="text" className="input-field" placeholder={this.props.placeholder ? this.props.placeholder : ""} name=""/>
    );
  }
}
export default Inputfiled;