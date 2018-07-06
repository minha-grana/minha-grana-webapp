import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AccountsList from './AccountsList';
import AccountAdd from './AccountAdd';
import AccountEdit from './AccountEdit';

import './Accounts.css';

class Accounts extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="page">
        <Route path={`${match.url}/add`} component={AccountAdd} />
        <Route path={`${match.url}/edit/:accountId`} component={AccountEdit} />
        <Route exact path={match.url} component={AccountsList} />
      </div>
    );
  }
}

export default Accounts;
