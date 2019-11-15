import React, { Component } from 'react';
import  '../common.css';
class CheckboxNew extends Component {
  constructor(props) {
    super(props);
  
  }
render() {
    return (
      <span className="Newcheckbox">
          <input type="checkbox" className="input-checkbox" id="fruit1" name="fruit-1" value="Apple"/>
          <label for="fruit1">Apple</label>
      </span>
    );
  }
}
export default CheckboxNew;


