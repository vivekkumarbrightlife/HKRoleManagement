import React, { Component } from 'react';



class SelectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ''
    }
  }
  handleSelectInput = (e) => {

      this.setState({
        selectedValue: e.target.value
      })
    // setTimeout(()=> {
      this.props.getSelectValue(e.target.value)
    // }, 50)
  }
render() {
    return (
      <React.Fragment>
        {
          this.props.lists &&
          <select value={this.state.selectedValue} onChange={this.handleSelectInput}>
            
            {
              this.props.lists.map((item, j) => {
               return <option key={j} value={item.name}>{item.name}</option>
              })

            }
          </select>
        }
      </React.Fragment>
    );
  }
}
export default SelectList;