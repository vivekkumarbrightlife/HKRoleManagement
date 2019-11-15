import React, { Component } from 'react';
import './header.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
render() {
    return (
        <div className="app-header">
            <div className="navigation-container">
                <nav>
                    <span className="title">Role management</span>
                    <ul>
                        <li className="link-icon"><a href="#"><i class="material-icons">mail_outline</i></a></li>
                        <li className="link-icon"><a href="#"><i class="material-icons">notifications</i></a></li>
                        <li className="link-icon"><a href="#"><i class="material-icons">account_circle</i></a></li>
                    </ul>
                </nav>
            </div>
            <div className="sidenav">
                <ul className="lists">
                    <li className="side-menu-list">
                        <a href="#" >
                            <i class="material-icons">supervised_user_circle</i>
                            Log in
                        </a>
                    </li>
                    <li className="side-menu-list">
                        <a href="#" >
                            <i class="material-icons">supervised_user_circle</i>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
            <main className="main-content">
                    <Router>
                        <Switch>
                            <Route path="/dashbord" render={(props) => {return <Dashboard />}}/>
                        </Switch>
                    </Router>
                    <h1>akjfaklsdjfnaklnflkndfaslkfndsklaflksdanlfnas</h1>
                </main>
        </div>

    );
  }
}
export default Header;