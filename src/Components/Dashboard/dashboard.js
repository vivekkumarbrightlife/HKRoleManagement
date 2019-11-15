import React, { Component } from 'react';
import User from '../User';
import SuperUser from '../SuperUser';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
        <div>
            <User/>
            <SuperUser/>
        </div>
    );
  }
}
export default Dashboard;