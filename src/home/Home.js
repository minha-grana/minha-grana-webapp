import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Redirect } from 'react-router-dom';

import './Home.css';

class Home extends Component {

  login() {
    this.props.auth.login();
  }

  render() {
    return this.props.auth.isAuthenticated() ? <Redirect to="/dashboard" /> :
      <div className="home-page">
        <h1>Bem vindo ao Minha Grana</h1>
        <Button teal waves onClick={this.login.bind(this)}>Entrar</Button>
      </div>;
  }
}

export default Home;
