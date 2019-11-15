import React, { Component } from 'react';
import  '../common.css';
import Inputfiled from '../common/Input';
import SelectList from '../common/Select';
// import CommonButtons from '../common/Button'
class User extends Component {
  constructor(props) {
    super(props);
    this.state={
      systemId: '',
      applicationIds:[]
    }
  }
  handleSelect = (e) => {
    console.log(e);
  } 
  handleInputInput = (e) => {
    this.setState({
      systemId: e
    })
  }
  handleMultiSelect = (e) => {
    let findIndex = this.state.applicationIds.findIndex((index)=>{ return e.target.value === index})
    if(e.target.checked) {
      if(!(findIndex > -1)) {
        this.state.applicationIds.push(e.target.value);
      }
    }
    if(!e.target.checked) {
      if(findIndex > -1) {
        this.state.applicationIds.splice(findIndex, 1)
      }
    }
  }
  submitData = (e) => {
    e.preventDefault();
    console.log(e)
  }
render() {
    return (
     <div className="white-background form-bg">
       <form onSubmit={this.submitData}>
         <div className="input-row">  
            <Inputfiled placeholder="System Id" getSystemId={this.handleInputInput}/>
         </div>
         <div className="input-row">
             <SelectList/>
         </div>
         <div className="input-row">
             <SelectList lists = {this.props.lists} getSelectValue={this.handleSelect}/>
         </div>
         <div className="input-row" style={{textAlign: 'left', marginLeft: '30'}}>
           {
           this.props.lists.map((item, i)=> {
             return <div style={{margin: '5px 10px', verticalAlign: 'middle'}}>
              <input type="checkbox" onChange={this.handleMultiSelect} value={item.id}/>
              <span style={{marginLeft: 5}}>{item.name}</span>
             </div>
           })
          }
         </div>
         <div className="input-row">
             <button className="btn" type="submit">Submit</button>
         </div>
         </form>
     </div>
    );
  }
}
export default User;