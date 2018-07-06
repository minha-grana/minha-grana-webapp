import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-materialize';

import './AccountsList.css';

class AccountsList extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <p className="page-header">Accounts <small>Manage your accounts</small></p>

        <Button floating fab='vertical' className='red' icon='add' large style={{bottom: '45px', right: '24px'}}>
          <Button floating icon='account_balance' className='blue darken-1' onClick={()=> history.push('/accounts/add')}/>
        </Button>
      </div>
    );
  }
}

export default withRouter(props => <AccountsList {...props}/>);
