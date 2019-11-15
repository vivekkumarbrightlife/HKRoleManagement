import React, { Component } from 'react';
import  '../common.css';
import Inputfiled from '../common/Input';
import SelectList from '../common/Select';
import CommonButtons from '../common/Button'
import SuperListing from './SuperListing';

class SuperUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
     <div className="superuser-bg">
         <SuperListing/>
     </div>
    );
  }
}
export default SuperUser;