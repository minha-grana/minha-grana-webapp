import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PageTemplate from './template/PageTemplate';
import Dashboard from './dashboard/Dashboard';
import Timeline from './timeline/Timeline';
import Accounts from './accounts/Accounts';
import Settings from './settings/Settings';
import About from './about/About';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <PageTemplate>
                <Route path="/" exact={true} render={() => <Redirect to="/dashboard" />} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/timeline" component={Timeline} />
                <Route path="/accounts" component={Accounts} />                
                <Route path="/settings" component={Settings} />
                <Route path="/about" component={About} />
            </PageTemplate>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();

