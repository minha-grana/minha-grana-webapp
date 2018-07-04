import React, { Component } from 'react';
import { SideNav, SideNavItem, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import './LeftSideNav.css';


class LeftSideNav extends Component {
  render() {
    const { location: { pathname }} = this.props;
    
    return (
        <SideNav id="side-nav" trigger={<div/>} options={{ closeOnClick: true, draggable: false }}>

        <div className="userView">
            <div class="background"><img src="img/sidebar-bg.jpg" /></div>
            <a href="#!user"><img class="circle" src="img/avatar-placeholder.png" /></a>
            <a href="#!name"><span class="white-text name">John Doe</span></a>
            <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div>
        <p>{}</p>
        <li><NavLink className={"waves-effect " + (pathname === "/dashboard" ? "active-route" : "")} to="/dashboard"><Icon>dashboard</Icon>Dashboard</NavLink></li>
        <li><NavLink className={"waves-effect " + (pathname === "/timeline" ? "active-route" : "")} to="/timeline"><Icon>timeline</Icon>Timeline</NavLink></li>
        <li><NavLink className={"waves-effect " + (pathname === "/accounts" ? "active-route" : "")} to="/accounts"><Icon>account_balance</Icon>Accounts</NavLink></li>
        <li><div className="divider"></div></li>
        <li><NavLink className={"waves-effect " + (pathname === "/settings" ? "active-route" : "")} to="/settings"><Icon>settings</Icon>Settings</NavLink></li>
        <li><NavLink className={"waves-effect " + (pathname === "/about" ? "active-route" : "")} to="/about"><Icon>help</Icon>About</NavLink></li>

      </SideNav>
    );
  }
}

export default withRouter(props => <LeftSideNav {...props}/>);