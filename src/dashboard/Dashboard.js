import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import CurrentBalance from '../common/current-balance/CurrentBalance';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="page">
        <Row>
          <Col s={12} m={5} l={6} xl={8} className="page-header-col-wrapper">
            <p className="page-header">Dashboard <small>Lorem ipsum dolor, sit amet</small></p>
          </Col>
          <Col s={12} m={7} l={6} xl={4}>
            <CurrentBalance />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
