import React, { Component } from 'react';
import { Row, Col, Icon, Button, Dropdown, NavItem } from 'react-materialize';
import moment from 'moment';

import CurrentBalance from '../common/current-balance/CurrentBalance';

import './Timeline.css';

class Timeline extends Component {

  days() {
    const days = [];
    
    for (let i = 0; i < moment()/*.add(1, 'month')*/.startOf('month').day(); i++) {
      days.push(<Col className="empty-day" key={'empty_' + i}>&nbsp;</Col>);
    }
    for (let i = 1; i <= moment()/*.add(1, 'month')*/.endOf('month').date(); i++) {
      days.push(<Col key={i}><span className="day-no">{i}</span>&nbsp;</Col>);
    }

    const weeks = []
    let week = [];
    for (let i = 0; i < days.length; i++) {
      week.push(days[i]);
      if (week.length > 6) {
        weeks.push(<Row key={"week_" + i}>{week}</Row>);
        week = [];
      }
    }
    for (let i = week.length; i < 7; i++) {
      week.push(<Col className="empty-day" key={'empty_end_of_month_' + i}>&nbsp;</Col>)
    }
    weeks.push(week);

    const header = (<Row className="calendar-header">
      <Col>{moment().add(0, 'd').format('dddd')}</Col>
      <Col>{moment().add(1, 'd').format('dddd')}</Col>
      <Col>{moment().add(2, 'd').format('dddd')}</Col>
      <Col>{moment().add(3, 'd').format('dddd')}</Col>
      <Col>{moment().add(4, 'd').format('dddd')}</Col>
      <Col>{moment().add(5, 'd').format('dddd')}</Col>
      <Col>{moment().add(6, 'd').format('dddd')}</Col>
    </Row>);
    
    return (
    <div className="timeline-calendar">
      {header}
      <div className="calendar-body">
        {weeks}
      </div>
    </div>);
  }
  
  render() {
    return (
      <div className="page">
        <p className="page-header">Timeline <small>Your money flow between days</small></p>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col s={12}>
            {this.days()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Timeline;
