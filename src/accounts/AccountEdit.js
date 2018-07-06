import React, { Component } from 'react';

import './AccountEdit.css';

class AccountEdit extends Component {
  render() {
    const { match } = this.props;
    return (
      <p className="page-header">Accounts <small>Edit your account {match.params.accountId}</small></p>
    );
  }
}

export default AccountEdit;
