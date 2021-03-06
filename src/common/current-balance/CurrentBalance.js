import React, { Component } from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';

import './CurrentBalance.css';

class CurrentBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const { expanded } = this.state;
    return (
      <Card>
        <Row className="center-align" style={{marginBottom: "0"}}>
          <Col s={6} className="right-align"><h6 style={{marginTop: "1.2em"}}>Current Balance</h6></Col>
          <Col s={6} className="left-align"><h5>R$ 33.564,31</h5></Col>
        </Row>
        {expanded &&
          <Row className="center-align">
            <Col s={6} className="right-align">NuConta</Col>
            <Col s={6} className="left-align">R$ 19.234,12</Col>
            <Col s={6} className="right-align">Caixa</Col>
            <Col s={6} className="left-align">R$ 3.132,12</Col>
            <Col s={6} className="right-align">Itau</Col>
            <Col s={6} className="left-align">R$ 330,02</Col>
          </Row>}

        <div className="center-align">
          <a style={{cursor: "pointer"}} onClick={this.toggle}><Icon>{expanded? "expand_less" : "expand_more"}</Icon></a>
        </div>
      </Card>
    );
  }
}

export default CurrentBalance;
