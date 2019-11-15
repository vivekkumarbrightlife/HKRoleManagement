import React, { Component } from 'react';
import Inputfiled from '../Input';
import  '../../common.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      emailId: '',
      passsword: ''
    }
  }
  handleEmailInput = (e) => {
    console.log(e); 
    this.setState({
        emailId: e
    })
  }
  handlePassword = (e) => {
      console.log(e);
  }
render() {
    return ( 
        <div className="white-background form-bg">
            <form className="login-form">
                <div className="input-row">
                    <Inputfiled placeholder="Email" getSystemId={this.handleEmailInput}/>
                </div>
                <div className="input-row">
                    <Inputfiled placeholder="Password" getSystemId={this.handlePassword} />
                </div>
            </form>
        </div>
    );
  }
}
export default Login;