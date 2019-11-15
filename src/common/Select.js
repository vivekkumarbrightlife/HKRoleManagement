import React, { Component } from 'react';



class SelectList extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
       <select>
            <option>Select</option>
           <option>One</option>
           <option>Two</option>
           <option>Three</option>
       </select>
    );
  }
}
export default SelectList;