import React, { Component } from 'react';
import  '../common.css';
import Inputfiled from '../common/Input';
import SelectList from '../common/Select';
import CommonButtons from '../common/Button'
class User extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
     <div className="white-background form-bg">
         <div className="input-row">  
            <Inputfiled placeholder="System Id"/>
         </div>
         <div className="input-row">
             <SelectList/>
         </div>
         <div className="input-row">
             <SelectList/>
         </div>
         <div className="input-row">
             <CommonButtons/>
         </div>
     </div>
    );
  }
}
export default User;