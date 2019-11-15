import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Inputfiled from '../../common/Input';
import SimpleSelect from '../../common/select';
import '../../common.css';

class UserRequest extends Component{
    constructor(){
        super();

    }
render() {
    return (
       <div className="UserRequestForm">
           <div className="block-div">
                <Inputfiled label='System Id'/>
            </div> 
            <div className="block-div">
                <SimpleSelect label='Select App Id'/>     
            </div> 
            <div className="block-div">
                <SimpleSelect label='Select Manager'/>     
            </div>           
       </div>
    );
  }
}


    

export default UserRequest;