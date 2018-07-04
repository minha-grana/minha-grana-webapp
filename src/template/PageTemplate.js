import React, { Component } from 'react';

import TopNavBar from './TopNavBar';
import LeftSideNav from './LeftSideNav'

class PageTemplate extends Component {
    render() {
      return (
        <div>
            <TopNavBar />
            <LeftSideNav />
            {this.props.children}
        </div>
      );
    }
  }
  
  export default PageTemplate;