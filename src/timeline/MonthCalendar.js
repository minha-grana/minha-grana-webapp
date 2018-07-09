import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import DatePicker from 'rc-calendar/lib/Picker';
import RCMonthCalendar from 'rc-calendar/lib/MonthCalendar';
import moment from 'moment';

import 'rc-calendar/assets/index.css';
import './MonthCalendar.css';


class MonthCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment().startOf('day'), // The current date (never changes)
      currentMonth: moment().startOf('month') // Selected month to display at "month" view mode (user selectable, default currentDate Month)
    }
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

  setCurrentMonth(value) {
    this.setState({
      currentMonth: value.startOf('month')
    })
  }

  renderNavigator() {
    const calendar = (<RCMonthCalendar />);
    return (
      <Row>
        <Col s={12} className="center-align" style={{lineHeight: "1.4em"}}>
          <Button flat onClick={() => this.navigateBack()}>&lt;</Button>

          <DatePicker calendar={calendar}
                      value={this.state.currentMonth}
                      onChange={this.setCurrentMonth.bind(this)}
                      mode="month">
            {({ value }) => (<span className="date-picker-value">{value && value.format('MMMM, YYYY')}</span>)}
          </DatePicker>

          <Button flat onClick={() => this.navigateForward()}>&gt;</Button>
        </Col>
      </Row>
    );
  }

  days() {
    const { currentMonth, currentDate } = this.state;
    const days = [];

    for (let i = 0; i < currentMonth.clone().startOf('month').day(); i++) {
      days.push(<Col className="empty-day" key={'empty_' + i}>&nbsp;</Col>);
    }

    for (let i = 1; i <= currentMonth.clone().endOf('month').date(); i++) {
      days.push(<Col key={i} className={
        (currentMonth.diff(currentDate, 'year') === 0 &&
          currentMonth.diff(currentDate, 'month') === 0 &&
          currentMonth.clone().add(i - 1, 'd').diff(currentDate, 'day') === 0) ? 'current-day': ''}>
          <span className="day-no">{i}</span>&nbsp;</Col>);
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
      {moment.weekdays().map(day => (<Col key={day}>{day}</Col>))}
    </Row>);

    return (
      <Row>
        <Col s={12}>
          <div className="month-calendar">
            {header}
            <div className="calendar-body">
              {weeks}
            </div>
          </div>
        </Col>
      </Row>
    );
  }

  renderMonthCalendar() {
    return this.days();

    const { currentMonth, currentDate } = this.state;
    const daysBehindToCompleteWeek = currentMonth.clone().startOf('month').day();
    const daysInCurrentMonth = currentMonth.clone().endOf('month').date();


  }

  render() {
    return (
      <div>
        <div className="hide-on-small-only">
          {this.renderNavigator()}
          {this.renderMonthCalendar()}
        </div>

        <div className="show-on-small hide-on-med-and-up center-align" style={{marginTop: "15vh"}}>
          <p><Icon large>screen_rotation</Icon></p>
          <p className="page-header"><small>Please rotate your phone horizontally to see the month calendar better</small></p>
        </div>
      </div>
    );
  }
}

export default MonthCalendar;
