import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from 'react-materialize';

import './AccountEdit.css';

class AccountEdit extends Component {

  save() {
    this.goBack();
  }

  goBack() {
    this.props.history.push('/accounts')
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <p className="page-header">Accounts <small>Edit your account {match.params.accountId}</small></p>

        <Row className="page-content">
          <Col s={12} m={10} l={8} offset="m1 l2">
            <Input s={12} type='select' disabled defaultValue="2" label='Bank' icon='attach_money'>
              <option value='1'>NuBank</option>
              <option value='2'>Itaú</option>
              <option value='3'>Caixa</option>
            </Input>
            <Row>
              <Input s={12} m={4} label="Agency" disabled defaultValue="1234" icon='account_balance'/>
              <Input s={12} m={8} label="Account No." disabled defaultValue="0012356-3" icon='account_circle'/>
            </Row>
            <Row>
              <Col className="input-field center-align" s={10} m={6} offset="s1 m3">
                <Row>
                  <Col s={6}>
                    <Button onClick={() => this.goBack.bind(this)()} className="orange darken-2" waves='light'>Go back<Icon left>chevron_left</Icon></Button>
                  </Col>
                  <Col s={6}>
                    <Button onClick={() => this.save.bind(this)()} waves='light'>Save<Icon left>done</Icon></Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AccountEdit;
