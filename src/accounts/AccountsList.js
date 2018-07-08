import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'react-materialize';

import './AccountsList.css';

class AccountsList extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <p className="page-header">Accounts <small>Manage your accounts</small></p>


        <Row className="page-content">
          <Col s={12} m={10} l={8} offset="m1 l2">
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <div>Bank</div>
                </div>
                <div class="card-action">
                  <a className="right" href="#">Edit this account</a>
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      
        <Button floating fab='vertical' className='red' icon='add' large style={{bottom: '45px', right: '24px'}}>
          <Button floating icon='account_balance' className='blue darken-1' onClick={()=> history.push('/accounts/add')}/>
        </Button>
      </div>
    );
  }
}

export default withRouter(props => <AccountsList {...props}/>);
