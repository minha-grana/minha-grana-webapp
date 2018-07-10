import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import DatePicker from 'rc-calendar/lib/Picker';
import RCMonthCalendar from 'rc-calendar/lib/MonthCalendar';
import moment from 'moment';
import shortid from 'shortid';

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
      currentMonth: value.clone().startOf('month')
    });
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

  isCurrentDay(compareDate) {
    const { currentDate } = this.state;
    return compareDate.diff(currentDate, 'year') === 0 &&
           compareDate.diff(currentDate, 'month') === 0 &&
           compareDate.diff(currentDate, 'day') === 0;
  }

  renderCell(dayNo) {
    const { currentMonth } = this.state;
    const isCurrentDay = this.isCurrentDay(currentMonth.clone().add(dayNo - 1, 'd'));

    if (dayNo) {
      return (
      <Col key={shortid.generate()} className={(isCurrentDay ? 'current-day': '') + " day-cell"}>
        <span className="day-no">{dayNo}</span>
        <div className="cell-header">
          {isCurrentDay && <span>Today</span>}
        </div>

        <Row className="cell-container">
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-139,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-1.139,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-9,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-12.139,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-139,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-139,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-9,99</Col>}
          {(isCurrentDay || Math.floor(Math.random() * 1000) < 150) && <Col className="cell-value"><i className="account-color"></i>-39,99</Col>}
        </Row>
      </Col>
      );
    } else {
      return (<Col className="empty-cell" key={shortid.generate()}><div className="cell-container"></div></Col>);
    }
  }

  getMonthCalendarCells() {
    const { currentMonth } = this.state;
    const daysBehindToCompleteWeek = currentMonth.clone().startOf('month').day();
    const daysInCurrentMonth = currentMonth.clone().endOf('month').date();

    const currentMonthCalendarCells = [];

    for (let i = 0; i < daysBehindToCompleteWeek; i++) {
      currentMonthCalendarCells.push(this.renderCell());
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      currentMonthCalendarCells.push(this.renderCell(i));
    }

    return currentMonthCalendarCells;
  }

  getMonthCalendarRows() {
    const cells = this.getMonthCalendarCells();
    const monthCalendarRows = [];

    let currentRow = [];
    for (let i = 0; i < cells.length; i++) {
      if (currentRow.length === 7) {
        monthCalendarRows.push(currentRow);
        currentRow = [];
      }

      currentRow.push(cells[i]);
    }

    for (let i = currentRow.length; i < 7; i++) {
      currentRow.push(this.renderCell());
    }
    monthCalendarRows.push(currentRow);

    return monthCalendarRows;
  }

  renderMonthCalendarBody() {
    return (
      <div className="calendar-body">
        {this.getMonthCalendarRows().map(cells => <Row key={shortid.generate()}>{cells}</Row>)}
      </div>
    );
  }

  renderMonthCalendarHeader() {
    return (
      <Row className="calendar-header">
        {moment.weekdays().map(day => (<Col key={shortid.generate()}>{day}</Col>))}
      </Row>
    );
  }

  renderMonthCalendar() {
    return (
      <Row>
        <Col s={12} className="month-calendar">
          {this.renderMonthCalendarHeader()}
          {this.renderMonthCalendarBody()}
        </Col>
      </Row>
    );
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
