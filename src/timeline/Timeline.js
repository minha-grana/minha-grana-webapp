import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
import moment from 'moment';

import './Timeline.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "month",
      currentDate: moment().startOf('day'),
      currentMonth: moment().startOf('month')
    }
  }

  days() {
    const { currentMonth, currentDate } = this.state;
    const days = [];
    
    for (let i = 0; i < currentMonth.clone().startOf('month').day(); i++) {
      days.push(<Col className="empty-day" key={'empty_' + i}>&nbsp;</Col>);
    }


    for (let i = 1; i <= currentMonth.clone().endOf('month').date(); i++) {

      console.log(currentMonth.diff(currentDate, 'year') === 0);
      console.log(currentMonth.diff(currentDate, 'month') === 0);
      console.log(currentMonth.diff(currentDate, 'day') === 0);
      console.log(currentMonth.clone().add(i - 1, 'd').diff(currentDate, 'day'));
      
      days.push(<Col key={i} className={
        (currentMonth.diff(currentDate, 'year') === 0 &&
         currentMonth.diff(currentDate, 'month') === 0 &&
          currentMonth.clone().add(i - 1, 'd').diff(currentDate, 'day') === 0) ? 'current-day': ''}><span className="day-no">{i}</span>&nbsp;</Col>);
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
    for (let i = week.length; i > 0 && i < 7; i++) {
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

  navigateBack() {
    this.setState({
      currentMonth: this.state.currentMonth.clone().subtract(1, 'month')
    });
  }

  navigateForward() {
    this.setState({
      currentMonth: this.state.currentMonth.clone().add(1, 'month')
    });
  }

  renderNavigator() {
    return (
      <Row>
        <Col s={12} className="center-align">
          <Button flat onClick={() => this.navigateBack()}>&lt;</Button>

          {this.state.currentMonth.format('MMMM, YYYY')}

          <Button flat onClick={() => this.navigateForward()}>&gt;</Button>

        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div>
        {this.renderNavigator()}
        <Row>
          <Col s={12}>
            {this.days()}
          </Col>
        </Row>
      </div>
    );
  }
}

class Timeline extends Component {

  
  
  render() {
    return (
      <div className="page">
        <p className="page-header">Timeline <small>Your money flow between days</small></p>
        <Calendar />
      </div>
    );
  }
}

export default Timeline;
