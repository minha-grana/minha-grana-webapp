import React, { Component } from 'react';
import { Navbar, Icon, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

class TopNavBar extends Component {
  render() {
    return (
      <Navbar right brand={<div data-activates="side-nav"><Icon style={{margin: "0 15px"}}>menu</Icon></div>}>
         <NavLink to="/settings"><Icon>settings</Icon></NavLink>
      </Navbar>
    );
  }
}

export default TopNavBar;