import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button, Icon } from 'react-materialize';

import './AccountsList.css';

class AccountsList extends Component {

  editAccount() {
    this.props.history.push('/accounts/edit/123');
  }

  render() {
    return (
      <div>
        <p className="page-header">Accounts <small>Manage your accounts</small></p>


        <Row className="page-content">
          <Col s={12} m={10} l={8} offset="m1 l2">

            <div className="card bank-card horizontal">
              <div className="card-image hide-on-small-only">
                <Icon>account_balance</Icon>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <Row>
                    <Col s={4} l={3} className="right-align">Bank</Col>
                    <Col s={8} l={9}>NuBank</Col>
                  </Row>
                  <Row>
                    <Col s={4} l={3} className="right-align">Agency</Col>
                    <Col s={8} l={9}>1234</Col>
                  </Row>
                  <Row>
                    <Col s={4} l={3} className="right-align">Account</Col>
                    <Col s={8} l={9}>00012345-6</Col>
                  </Row>
                </div>
                <div className="edit-bank-action" onClick={() => this.editAccount.bind(this)()}>
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </div>

            <div className="card bank-card horizontal">
              <div className="card-image hide-on-small-only">
                <Icon>account_balance</Icon>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <Row>
                    <Col s={4} l={3} className="right-align">Bank</Col>
                    <Col s={8} l={9}>Itaú</Col>
                  </Row>
                  <Row>
                    <Col s={4} l={3} className="right-align">Agency</Col>
                    <Col s={8} l={9}>7890</Col>
                  </Row>
                  <Row>
                    <Col s={4} l={3} className="right-align">Account</Col>
                    <Col s={8} l={9}>00099682-1</Col>
                  </Row>
                </div>
                <div className="edit-bank-action" onClick={() => this.editAccount.bind(this)()}>
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </div>
            
          </Col>
        </Row>
      
        <Row>
          <Col className="center-align" s={10} m={8} l={6} offset="s1 m2 l3">
            <Row>
              <Col s={12}>
                <Button onClick={() => this.props.history.push('/accounts/add')} waves='light'>Add Account<Icon left>add</Icon></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(props => <AccountsList {...props}/>);
