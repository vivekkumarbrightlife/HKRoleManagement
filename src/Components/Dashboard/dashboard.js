import React, { Component } from 'react';
import User from '../User';
import SuperUser from '../SuperUser';
import HK from '../../Utility/utility';

import  '../../common.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationData: null
        }
    }
    componentDidMount() {
        this.getApplicationList()
    }
    getApplicationList = () => {
        let reqObj = {
            method: "get",
            url: HK.config.APIS.getApplicationList
        }
        HK.ajaxCall(reqObj).then((res) => {
            
            if (!res.data.results.exception) {
                console.log("List",res.data.results);
                this.setState({
                    applicationData: res.data.results
                })
            } else {
                alert("Something went wrong, please try again");
            }
        }).catch((err) => {
           
            console.log(err);
            alert("Something went wrong, please try again");
        });
    }
    render() {
        return (
            <div className="main-div">
                <h1>User Name</h1>
                {
                    this.state.applicationData &&
                        <User lists={this.state.applicationData} />
                }
                {/* {
                    this.renderApplictionList()
                } */}
                {/* <User  /> */}
                {/* <SuperUser /> */}
            </div>
        );
    }
}
export default Dashboard;