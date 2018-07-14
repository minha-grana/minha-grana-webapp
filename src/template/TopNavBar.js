import React, { Component } from 'react';
import { Navbar, Icon, Button } from 'react-materialize';

import './TopNavBar.css';

class TopNavBar extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Navbar right brand={<div data-activates="side-nav"><Icon style={{margin: "0 15px"}}>menu</Icon></div>}>
         <Button onClick={() => auth.logout()}>Logout</Button>
      </Navbar>
    );
  }
}

export default TopNavBar;
