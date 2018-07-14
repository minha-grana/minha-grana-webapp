import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './auth/Auth';

import PageTemplate from './template/PageTemplate';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import Timeline from './timeline/Timeline';
import Accounts from './accounts/Accounts';
import Settings from './settings/Settings';
import About from './about/About';

let isLoggedIn = false;
const loggedIn = (authResult, error) => {
  if (error) {
    console.error(error);
  } else {
    isLoggedIn = true;
    console.log(authResult);
    window.history.go(window.location.origin);
  }
};

const auth = new Auth(loggedIn);
const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} render={(props) => {
          handleAuthentication(props);
          return auth.isAuthenticated() ? <Redirect to="/dashboard" /> : <Home auth={auth} loading={isLoggedIn} />;
        }}/>
      {auth.isAuthenticated() &&
        <PageTemplate auth={auth}>
          <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />}/>
          <Route path="/timeline" render={(props) => <Timeline auth={auth} {...props} />}/>
          <Route path="/accounts" render={(props) => <Accounts auth={auth} {...props} />}/>
          <Route path="/settings" render={(props) => <Settings auth={auth} {...props} />}/>
          <Route path="/about" render={(props) => <About auth={auth} {...props} />}/>
        </PageTemplate>}
      <Route render={(props) => <Redirect to ="/"/>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();

