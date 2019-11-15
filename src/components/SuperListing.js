import React, { Component } from 'react';
import  '../common.css';
import Inputfiled from '../common/Input';
import SelectList from '../common/Select';
import CommonButtons from '../common/Button'
import CheckboxNew from '../common/CheckboxNew'
class SuperListing extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
     <div className="list-row">
        <div className="listing-card">
            <div className="stack-row"><span className="label-text">Name : </span>Dummy Name</div>
            <div className="stack-row"><span className="label-text">Email : </span>Dummy Email</div>
            <div className="stack-row"><span className="label-text">System Id : </span>System Id</div>
            <div className="width100 multiSelect">
              <CheckboxNew/>
              <CheckboxNew/>
              <CheckboxNew/>
            </div>
            <div className="stack-row submit-data width100">
                <input type="submit" className="input-submit blue-active-btn" value="Submit"/>
            </div>
        </div>
     </div>
    );
  }
}
export default SuperListing;