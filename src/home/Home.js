import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Redirect } from 'react-router-dom';

import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {wait: true};
    this.stopWaiting = this.stopWaiting.bind(this);
  }

  stopWaiting() {
    this.setState({wait: false});
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { wait } = this.state;
    const loading = (
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );

    setTimeout(this.stopWaiting, 1000);

    return (
      <div className="home-page">
        <h1>Bem vindo ao Minha Grana</h1>
        {wait && loading}
        {!wait && this.props.auth.isAuthenticated() && <Redirect to="/dashboard" />}
        {!wait && !this.props.auth.isAuthenticated() && <Button waves="light" onClick={this.login.bind(this)}>Entrar</Button>}
      </div>
    );
  }
}

export default Home;
