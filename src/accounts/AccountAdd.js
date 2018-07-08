import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';

import './AccountAdd.css';

class AccountAdd extends Component {

  createAccount() {
    // Returned id from account creation (Location header ?)
    this.props.history.push('/accounts/edit/123');
  }

  render() {
    return (
      <div>
        <p className="page-header">Accounts <small>Create a new account</small></p>
        <Row className="page-content">
          <Col s={12} m={10} l={8} offset="m1 l2">
            <Input s={12} type='select' label='Bank' icon='attach_money'>
              <option value='1'>NuBank</option>
              <option value='2'>Itaú</option>
              <option value='3'>Caixa</option>
            </Input>
            <Row>
              <Input s={12} m={4} label="Agency" icon='account_balance'/>
              <Input s={12} m={8} label="Account No." icon='account_circle'/>
            </Row>
            <Row>
              <Col className="input-field center-align" s={10} m={6} offset="s1 m3"> 
                <Button onClick={() => this.createAccount.bind(this)()} waves='light'>Create<Icon left>send</Icon></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AccountAdd;
