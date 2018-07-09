import React, { Component } from 'react';
import MonthCalendar from './MonthCalendar';

import './Timeline.css';


class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewMode: "month"
    };
  }

  render() {
    const { viewMode } = this.state;

    return (
      <div className="page">
        <p className="page-header">Timeline <small>Your money flow between days</small></p>

        {viewMode === "month" && <MonthCalendar />}
      </div>
    );
  }
}

export default Timeline;
