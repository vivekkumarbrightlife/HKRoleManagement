import React, { Component } from 'react';
import User from '../User';
import SuperUser from '../SuperUser';
import  '../../common.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
        <div className="main-div">
            {/* <User/> */}
            <SuperUser/>
        </div>
    );
  }
}
export default Dashboard;