import React, { Component } from 'react';
import { Button } from 'react-materialize';

import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className="page">
        <p className="page-header">Timeline <small>Lorem ipsum dolor, sit amet</small></p>

        <Button floating fab='vertical' className='red' icon='add' large style={{bottom: '45px', right: '24px'}}>
          <Button floating icon='attach_money' className='green'/>
        </Button>
      </div>
    );
  }
}

export default Timeline;
